import mongoose from "mongoose";
const schema = mongoose.Schema;

const clothingSchema = new schema({
    name:String,
    price:Number
});

export default mongoose.model("Clothing", clothingSchema);