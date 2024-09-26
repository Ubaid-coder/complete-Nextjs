import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    await connectMongoDb();
    const { id } = params;
    const { newTitle: title, newDescription: description } = await req.json();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: 'Topic updated' })

}

export async function GET(req, { params }) {
    await connectMongoDb();
    try {
        const { id } = params;
        const topic = await Topic.findOne({ _id: id });

        return NextResponse.json({ topic })
    } catch (err) {
        return NextResponse.json({ message: 'This id notfound!!' }, { status: 404 })
    }
}