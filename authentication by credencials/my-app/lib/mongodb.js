import mongoose from "mongoose";

export const connectMongoDb = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to mongodb');
    } catch (error) {
        console.log('Error connecting to mongodb!');
    }
}