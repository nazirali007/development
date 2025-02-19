import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { bookingQuerySchema, bookingQueryPatchSchema } from "@/lib/zod-schema";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import nodemailer from "nodemailer"
import fs from "fs";
import util from "util";
// import Cors from 'cors';
import { NextApiResponse } from "next";
const readFileAsync = util.promisify(fs.readFile);


const NODEMAILER_PASSWORD = process.env.NODEMAILER_SENDER_PASSWORD;
const NODEMAILER_SENDER_EMAIL = process.env.NODEMAILER_SENDER_EMAIL;
const NODEMAILER_RECIEVER_EMAIL = "info@captureatrip.com";

if (!NODEMAILER_PASSWORD || !NODEMAILER_SENDER_EMAIL || !NODEMAILER_RECIEVER_EMAIL) {
	throw new Error("Required environment variables are not defined for NodeMailer (mail.ts)");
}

// Transporter for sending email
const transporter = nodemailer.createTransport({
	service: "Gmail",
	secure: false,
	auth: {
		user: NODEMAILER_SENDER_EMAIL,
		pass: NODEMAILER_PASSWORD
	}
})

// Read HTML file
async function readHTMLFile(path: string): Promise<string> {
	try {
		const html = await readFileAsync(path, { encoding: "utf-8" });
		return html;
	} catch (err) {
		console.error("Error reading HTML file:", err);
		throw err;
	}
}

async function sendMail(mailOptions: any) {
	try {
		const info = await transporter.sendMail(mailOptions);
		console.log("Email Sent:", info.response);
		return true;
	} catch (error) {
		console.error("Error while sending mail:", error);
		return false;
	}
}

const rootDir = process.cwd();
const bookingHTML = `${rootDir}/src/lib/booking-mail.html`;


// const cors = Cors({
// 	methods: ['POST', 'PATCH'],
// 	origin: '*',
// });

export async function POST(req: Request) {
	const body = await req.json();

	try {
		// const {
		// 	tripName,
		// 	tripDate,
		// 	tripDuration,
		// 	name,
		// 	email,
		// 	phone,
		// 	memberCounts,
		// } = bookingQuerySchema.parse(body);

		const { tripName, tripDate, tripDuration, name, email, phone, memberCounts, slug } = body;
		// console.log("Booking request", memberCounts);

		await prismadb.bookingquery.create({
			data: {
				name,
				email,
				phone,
				tripDate: new Date(tripDate),
				tripDuration,
				tripName,
				members: {
					createMany: {
						data: Object.entries(memberCounts).map(
							([travelModeName, memberCount]) => ({
								travelModeName,
								memberCount: Number(memberCount),
							})
						),
					},
				},
			},
		});

		// console.log("Booking successful", slug);
		// await bookingConfimationMail({
		// 	email,
		// 	tripName,
		// 	tripDate: new Date(tripDate) as any,
		// 	tripDuration,
		// 	name,
		// 	phone,
		// 	memberCounts: Object.entries(memberCounts).map(([key, value]) => `${key}: ${value}`),
		// 	slug: slug,
		// });

		const htmlContent = await readHTMLFile(bookingHTML);

		const resultedHtml = htmlContent
			.replace("{name}", name)
			.replace("{tripName}", tripName)
			.replace("{tripDate}", tripDate)
			.replace("{tripDuration}", tripDuration)
			.replace("{phone}", phone)
			.replace("{email}", email)
			.replace("{memberCounts}", JSON.stringify(memberCounts))
			.replace("{slug}", slug);

		const mailOptions = {
			from: NODEMAILER_SENDER_EMAIL,
			to: NODEMAILER_RECIEVER_EMAIL,
			subject: `Booking | ${tripName} | @${name} - ${phone}`,
			html: resultedHtml
		}

		await sendMail(mailOptions);
		console.log("Booking Confirmation Mail Sent");

		return NextResponse.json({ success: true, message: `Booking successful` });
	} catch (error: any) {
		console.log(error); // debug
		// return new NextResponse(error.message, { status: 500 });
		return NextResponse.json({ success: false, message: error.message });
	}
}


export async function PATCH(req: Request) {
	const body = await req.json();

	const user = await getServerSession(options)
	if (!user?.user.isAdmin) {
		return NextResponse.json({ success: false, status: 400, message: "You are not allowed to perform this action" });
	}

	try {
		const { id, read } = bookingQueryPatchSchema.parse(body);

		const booking = await prismadb.bookingquery.findUnique({
			where: {
				id,
			},
		});

		if (!booking)
			return NextResponse.json({ success: true, message: `No booking found` }); // if no data is found

		await prismadb.bookingquery.update({
			// if data is found
			where: {
				id,
			},
			data: {
				read: !read,
			},
		});

		return NextResponse.json({
			success: true,
			message: `Status updated to ${!read}`,
		});
	} catch (error) {
		console.log(error); // debug
		return NextResponse.json({ success: false });
	}
}
