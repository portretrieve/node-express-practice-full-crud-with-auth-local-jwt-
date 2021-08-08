import express from "express";
const router = express.Router();
import {DisplayClothingList} from "../Controllers/clothingController"

// GET 

router.get("/", (req, res, next)=>{
    res.send("Clothing List")
})


export default router;