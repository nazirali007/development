import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();
  } catch (error) {}
  return NextResponse.json({ success: true });
}
