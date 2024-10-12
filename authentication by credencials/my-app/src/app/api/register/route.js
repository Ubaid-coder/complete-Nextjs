import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        await connectMongoDb();
        const hashedPasd = await bcrypt.hash(password,10);

        await User.create({name, email, password:hashedPasd});

        return NextResponse.json(
            { message: 'User Registered' },
            { status: 201 }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: 'An error occurred while registering the user' },
            { status: 500 }
        )
    }
}