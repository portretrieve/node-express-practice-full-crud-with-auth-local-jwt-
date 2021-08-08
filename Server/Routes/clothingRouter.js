"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const clothingController_1 = require("../Controllers/clothingController");
router.get("/", clothingController_1.DisplayClothingList);
router.get('/add', clothingController_1.DisplayAddPage);
router.get('/edit/:id', clothingController_1.DisplayEditPage);
router.post('/add', clothingController_1.ProcessAddPage);
router.post('/edit/:id', clothingController_1.ProcessEditPage);
router.get('/delete/:id', clothingController_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=clothingRouter.js.map