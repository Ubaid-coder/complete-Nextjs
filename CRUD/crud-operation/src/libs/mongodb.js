import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://ubaid:786125@cluster0.03zgl.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster0');   
        console.log("Connected to MongoDB...");

    } catch (err) {
        console.log('Failed to connect!');
        console.log(err);
    }
}

export default connectMongoDb;