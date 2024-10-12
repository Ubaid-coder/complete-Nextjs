import { NextResponse } from "next/server"
import { connectMongoDb } from "../../../../lib/mongodb"
import User from "../../../../models/user"

export async function POST(req) {
    try {
        await connectMongoDb();
        const {email} = await req.json();
        const user = await User.findOne({email}).select('_id');
        console.log('userId:',user);

        return NextResponse.json({user})

    } catch (error) {
        console.log(error);
        return NextResponse.status(500).json({message: 'An error occurred while fetching user'})
    }
}