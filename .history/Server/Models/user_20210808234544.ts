import mongoose from "mongoose";

const UserSchema = new mongoose.Schema
({
username: String,
emailAddress: String,
displayName : String,
created:
    {
        type: Date,
        default: Date.now()
    },
    updated:
    {
        type: Date,
        default: Date.now()
    }


},{
    collection : "users"
})

export default mongoose.model("UserModel", UserSchema);
