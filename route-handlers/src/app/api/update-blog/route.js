import connectDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";


const EidtBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
})


export async function PUT(req) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const getCurrBlogId = searchParams.get('id');

        if (!getCurrBlogId) {
            return NextResponse.json({
                message: 'Invalid blog ID'
            })
        }

        const { title, description } = await req.json();
        const { error } = EidtBlog.validate({ title, description });

        if (error) {
            return NextResponse.json({
                message: error.details.message
            })
        }

        const updatedBlogById = await Blog.findOneAndUpdate(
            {
                _id: getCurrBlogId
            },
            { title, description },
            { new: true }
        )

        if (updatedBlogById) {
            return NextResponse.json({
                message: 'Blog updated successfully.',
                success: true,
                updatedBlogById
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong!'
            })
        }

    } catch (error) {
        console.log(error);;
        return NextResponse.json({
            success: false,
            message: 'Something went wrong!'
        })
    }
}