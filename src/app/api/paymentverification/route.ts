import { NextResponse } from "next/server";
import crypto from "crypto";
import prismadb from "@/lib/prismadb";
import { paymentVerficationSchema } from "@/lib/zod-schema";
export async function POST(req: Request) {
	try {
		const reqBody = await req.json();

		const {
			razorpay_order_id,
			razorpay_payment_id,
			razorpay_signature,
			gstAmount,
			memberCounts,
			paidAmount,
			totalAmount,
			tripName,
			tripDate,
			tripDuration,
			orderId,
			tripslug,
			paymentMethod,
			tcsAmount,
			userId,
		} = paymentVerficationSchema.parse(reqBody);

		// if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !gstAmount || !memberCounts || !paidAmount || !totalAmount || !tripName || !tripDate || !tripDuration || !orderId || !tripslug || !tcsAmount || !userId) {
		//     return new NextResponse("Need required fields to get started", { status: 400 })
		// }

		const body = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSignature = crypto
			.createHmac("sha256", process.env.RAZORPAY_API_SECRET_KEY!)
			.update(body.toString())
			.digest("hex");
		const isAuthenticated = expectedSignature === razorpay_signature;

		if (!isAuthenticated) {
			return new NextResponse("UnAuthenticated", { status: 401 });
		}

		let status = "Pending";
		if (paidAmount === totalAmount) {
			status = "Booked";
		}
		const response = await prismadb.booking.create({
			data: {
				userId: userId,
				dueAmount: totalAmount - paidAmount,
				gstAmount,
				paidAmount,
				totalAmount,
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
				tripDate,
				tripDuration,
				orderId,
				tripslug: tripslug,
				status,
				paymentMethod,
				tcsAmount,
			},
			select: {
				id: true,
			},
		});

		return NextResponse.json({ success: true, response });
	} catch (error) {
		console.log(error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
