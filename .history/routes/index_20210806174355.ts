import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", page:"Home" });
});

/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("index", { title: "About" });
});

/* GET home page. */
router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Projects" });
});

/* GET home page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services" });
});

/* GET home page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact" });
});


export default router;
