import mongoose from "mongoose"
const schema = mongoose.Schema

const clothingSchema = new schema({
    name:String,
    price:Number
},{
    collection : "clothing"
})

export default mongoose.model("Clothing", clothingSchema)