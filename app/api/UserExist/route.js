import { dbConnect } from "@/db/dbConfig";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username } = await req.json();

    await dbConnect();
    const user = await User.findOne({ UserName: username }).select("_id");

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
