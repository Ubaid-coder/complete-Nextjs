import connectDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        await connectDB();
        const extractAllBlogsFromDB = await Blog.find({});

        if (extractAllBlogsFromDB) {
            return NextResponse.json({
                success: true,
                data: extractAllBlogsFromDB
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong!'
            })
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong!'
        })
    }
}