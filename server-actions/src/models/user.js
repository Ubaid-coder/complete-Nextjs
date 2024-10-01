const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String
})

const user = mongoose.models.data || mongoose.model('data',userSchema);

export default user;