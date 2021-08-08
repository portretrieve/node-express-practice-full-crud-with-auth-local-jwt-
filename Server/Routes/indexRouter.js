"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const indexController_1 = require("../Controllers/indexController");
router.get("/", indexController_1.DisplayHomePage);
router.get("/about", indexController_1.DisplayAboutPage);
router.get("/projects", indexController_1.DisplayProjectsPage);
router.get("/services", indexController_1.DisplayServicesPage);
router.get("/contact", indexController_1.DisplayContactPage);
exports.default = router;
//# sourceMappingURL=indexRouter.js.map