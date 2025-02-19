// import { instance } from "@/lib/razorpay";
import { NextResponse } from "next/server";
import { checkoutAmountSchema } from "@/lib/zod-schema";

export async function POST(req: Request) {
	const body = await req.json();
	try {
		const { amount } = checkoutAmountSchema.parse(body);

		if (!amount) {
			return new NextResponse("Need Amount to get started", { status: 400 });
		}
		const options = {
			amount: amount * 100,
			currency: "INR",
		};
		// const order = await instance.orders.create(options);
		return NextResponse.json({ success: true });
	} catch (error) {
		console.log(error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
