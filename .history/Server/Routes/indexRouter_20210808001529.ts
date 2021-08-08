import express from "express";
const router = express.Router();
import {DisplayHomePage, DisplayAboutPage, DisplayProjectsPage, DisplayServicesPage, DisplayContactPage} from "../Controllers"

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET about page. */
router.get("/about", DisplayAboutPage);

/* GET home page. */
router.get("/projects", DisplayProjectsPage);

/* GET home page. */
router.get("/services", DisplayServicesPage);

/* GET home page. */
router.get("/contact", DisplayContactPage);


export default router;
