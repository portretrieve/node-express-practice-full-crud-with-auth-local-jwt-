import express from "express";
const router = express.Router();
import {DisplayClothingList} from "../Controllers/clothingController"

// GET 

router.get("/", DisplayClothingList);



export default router;