/**
 * contactMe.js
 *
 * This is a router file for contact me page
 * Student Name: 
 * Student ID: 
 * Date: 
 */
var express = require("express");
var router = express.Router();

/* GET Contact Me page. */
router.get("/", function (req, res, next) {
  res.render("contactMe", {
    title: "Contact Me",
  });
});

module.exports = router;
