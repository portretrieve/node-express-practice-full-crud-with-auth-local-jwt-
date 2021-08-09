import mongoose from "mongoose";

const UserSchema = new mongoose.Schema
({
fullName: String,
email: String,
contactNumber : Number

},{
    collection : "users"
})

export default mongoose.model("UserModel", UserSchema)
