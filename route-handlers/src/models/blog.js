import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
    title:String,
    description:String
})

const Blog = mongoose.models.Blog || mongoose.model("Blog",BlogSchema);

export default Blog;