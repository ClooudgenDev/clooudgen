import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Subscription from "@/models/subscription";

export async function POST(request) {
  try {
    const { email } = await request.json();
    const data = { email };
    await connectMongoDB();
    const res = await Subscription.create(data);
    if (res) {
      return NextResponse.json(
        { success: true, message: "Subscription added" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Something went wrong" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 404 }
    );
  }
}
