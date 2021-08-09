import mongoose from "mongoose";

const UserSchema = new mongoose.Schema
({
fullName: String,
email: String,
contactNumber : Number

},{
    collection : "users"
})

export default new mongoose.model("UserModel", UserSchema)
