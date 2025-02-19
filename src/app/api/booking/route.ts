import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/zod-schema";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

export async function POST(req: Request) {
	const body = await req.json();
	const { id } = bookingSchema.parse(body); // validate the request body
	const user = await getServerSession(options)
	if (!user?.user.isAdmin) {
		return NextResponse.json({ success: false, status: 400, message: "You are not allowed to perform this action" });
	}
	try {
		const data = await prismadb.booking.findUnique({
			where: {
				id,
			},
			include: {
				members: true,
			},
		});

		if (!data) {
			// if no data is found
			return NextResponse.json({ success: true, data: null });
		}

		// if data is found
		return NextResponse.json({ success: true, data });
	} catch (error) {
		// console.error(error); // debug
		return NextResponse.json({ success: false });
	}
}
