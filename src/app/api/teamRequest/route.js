import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import TeamRequest from "@/models/teamRequest";

export async function POST(request) {
    try {
        const body = await request.json();

        await connectMongoDB();

        const res = await TeamRequest.create(body);

        if (res) {
            return NextResponse.json(
                { success: true, message: "Team Request Submitted" },
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
