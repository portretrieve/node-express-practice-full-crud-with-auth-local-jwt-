var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req: express.Request, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
