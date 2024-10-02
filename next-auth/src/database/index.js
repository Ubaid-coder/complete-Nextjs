import mongoose from "mongoose";

const connectToDb = async () => {
    const connectionURL = 'mongodb+srv://ubaid:786125@cluster0.03zgl.mongodb.net/UsersAuth?retryWrites=true&w=majority&appName=Cluster0'

    mongoose.connect(connectionURL)
    try {
        console.log('db connected successfully');
    } catch (error) {
        console.log(error);
    }
}

export default connectToDb;