import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { CustomizedTripFormSchema, bookingQueryPatchSchema } from "@/lib/zod-schema";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import nodemailer from "nodemailer"
import fs from "fs";
import util from "util";

const readFileAsync = util.promisify(fs.readFile);

const NODEMAILER_PASSWORD = process.env.NODEMAILER_SENDER_PASSWORD;
const NODEMAILER_SENDER_EMAIL = process.env.NODEMAILER_SENDER_EMAIL;
// const NODEMAILER_RECIEVER_EMAIL = process.env.NODEMAILER_RECIEVER_EMAIL;
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
const queryHTML = `${rootDir}/src/lib/custom-query-mail.html`;

export async function POST(req: Request) {
    const body = await req.json();
    try {
        const { fullname, phone, email, tripMode, tripMonth, tripType, tripDestination } = CustomizedTripFormSchema.parse(body);

        await prismadb.customizedTripInquiry.create({
            data: {
                fullname,
                phone,
                email,
                tripMode,
                tripMonth,
                tripDestination: tripDestination || "Customized Trip",
                tripType,
            }
        });

        const htmlContent = await readHTMLFile(queryHTML);
        const resultedHtml = htmlContent
            .replace("{fullname}", fullname)
            .replace("{phone}", phone)
            .replace("{email}", email)
            .replace("{tripMode}", tripMode)
            .replace("{tripMonth}", tripMonth)
            .replace("{tripType}", tripType)
            .replace("{tripDestination}", tripDestination || "Customized Trip");

        const mailOptions = {
            from: NODEMAILER_SENDER_EMAIL,
            to: NODEMAILER_RECIEVER_EMAIL,
            subject: `Customized Trip | @${fullname} - ${phone}`,
            html: resultedHtml
        }

        await sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: `Hello ${fullname}, stay tuned we will connect you soon!`,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false });
    }
}

export async function PATCH(req: Request) {
    const body = await req.json();
    try {
        const { id, read } = bookingQueryPatchSchema.parse(body);
        const user = await getServerSession(options)
        if (!user?.user.isAdmin) {
            return NextResponse.json({ success: false, status: 400, message: "You are not allowed to perform this action" });
        }

        await prismadb.customizedTripInquiry.update({
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
        console.log(error);
        return NextResponse.json({ success: false });
    }
}
