import mongoose from "mongoose";


const connectDB = async () => {
    const connectionUrl = 'mongodb+srv://ubaid:786125@cluster0.03zgl.mongodb.net/TOPICS?retryWrites=true&w=majority&appName=Cluster0';

    try {
        await mongoose.connect(connectionUrl);
        console.log('MongoDB connection successful');

    } catch (error) {
        console.log('Failed to connect to MongoDB!');
    }

}

export default connectDB;