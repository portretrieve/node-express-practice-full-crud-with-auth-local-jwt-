import express from "express";
const router = express.Router();
import {DisplayClothingList} from "../Controllers/clothingController"

router.get("/", DisplayClothingList);
router.get("/edit/:id", DisplayClothingList);

export default router;