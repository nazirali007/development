import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { deletebookingQuery } from "@/lib/zod-schema";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";

export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const { id } = { id: params.id };
	const user = await getServerSession(options)
	if(!user?.user.isAdmin){
		return NextResponse.json({success : false, status: 400, message: "You are not allowed to perform this action"});
	}
	try {
		deletebookingQuery.safeParse({ params: { id } });

		await prismadb.bookingQueryMembers.deleteMany({
			where: {
				bookingqueryId: params.id,
			},
		});

		await prismadb.bookingquery.delete({
			where: {
				id: params.id,
			},
		});

		return NextResponse.json({
			success: true,
			message: `Query with id ${id}, Deleted Successfully`,
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json({ success: false });
	}
}
