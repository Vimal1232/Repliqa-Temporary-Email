import { dbConnect } from "@/db/dbConfig";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    const HashedPassword = await bcrypt.hash(password, 12);

    await dbConnect();
    await User.create({ UserName: username, Password: HashedPassword });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
