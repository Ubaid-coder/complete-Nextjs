import mongoose from "mongoose";

const connectToDB = async () => {
    const url = 'mongodb+srv://ubaid:786125@cluster0.03zgl.mongodb.net/user-management?retryWrites=true&w=majority&appName=Cluster0';
    mongoose.connect(url)
    .then(() => console.log('db connection established'))
    .catch(err => console.log(err));
}

export default connectToDB;