import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
    {
        email: {
            type:String,
            require: true
        },
        name: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true
    }
)

const User = mongoose.models.User ||  mongoose.model('User',userSchema);

export default User;