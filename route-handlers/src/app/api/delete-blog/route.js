import connectDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req){
    try {
        await connectDB();
        const {searchParams} = new URL(req.url);
        const getBlogId = searchParams.get('id');

        if(!getBlogId) {
            return NextResponse.json({
                message: 'Invalid blog ID'
            })
        }else{
            const DeleteGetBlogId = await Blog.findByIdAndDelete(getBlogId);
            if(DeleteGetBlogId) {
                return NextResponse.json({
                    message: 'Blog deleted successfully.',
                    success: true
                })
            }else{
                return NextResponse.json({
                    message: 'Failed to delete blog'
                })
            }
        }
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong!',
            success: false
        })
    }
}