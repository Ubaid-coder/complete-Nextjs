import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        await connectMongoDb();
        const { title, description } = await request.json();
        await Topic.create({ title, description });

        return NextResponse.json({
            message: 'Topic created successfully',
            status: 201,
        });
    } catch (error) {
        console.error("Error creating topic:", error);
        return NextResponse.json({
            message: 'Internal Server Error',
            status: 500,
        });
    }


}

export async function GET() {
    await connectMongoDb();
    const topics = await Topic.find({});
    console.log(topics);
    return NextResponse.json({ topics })
}

export async function DELETE(req) {
    await connectMongoDb();
    const id = req.nextUrl.searchParams.get('id');
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Topic deleted successfully' });
}