import express from "express";
const router = express.Router();
import {DisplayClothingList} from "../Controllers/clothingController"

router.get("/", DisplayClothingList);

export default router;