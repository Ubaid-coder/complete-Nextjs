import connectDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
})


export async function POST(req) {
    await connectDB();
    try {
        const extractBlogData = await req.json();
        const { title, description } = extractBlogData;

        const { error } = AddNewBlog.validate({title, description});

        if (error) {
            return NextResponse.json({
                message: error.details.message
            })
        } else {
            const newlyCreatedBlogItem = await Blog.create(extractBlogData);
            if (newlyCreatedBlogItem) {
                return NextResponse.json({ message: 'Blog created successfully.', success:true, newlyCreatedBlogItem })
            } else {
                return NextResponse.json({
                    message: 'Failed to create blog'
                })
            }
        }



    } catch (error) {
        console.log(error);

        return NextResponse.status(500).json({ message: 'Server error' })
    }
}