import express from "express";
const router = express.Router();
import {DisplayHomePage, DisplayAboutPage, DisplayProjectsPage, DisplayServicesPage, DisplayContactPage} from "../Controllers"

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET about page. */
router.get("/about", DisplayAboutPage);

/* GET home page. */
router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Projects", page:"projects" });
});

/* GET home page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services", page:"services" });
});

/* GET home page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact Us" , page:"contact"});
});


export default router;
