import mongoose from "mongoose"

export const connectMongoDb = async() => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('db connection established');
    } catch (error) {
        console.log("Error connecting to MongoDB!",error);
    }
}