import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Contact from "@/models/contact";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();
    const data = { name, email, phone, subject, message };

    await connectMongoDB();
    const res = await Contact.create(data);
    console.log(res);
    if (res) {
      return NextResponse.json(
        { success: true, message: "name added" },
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
