import express from "express";
const router = express.Router();
import {DisplayClothingList, DisplayEditPage} from "../Controllers/clothingController"

router.get("/", DisplayClothingList);
router.get("/edit/:id", DisplayEditPage);

export default router;