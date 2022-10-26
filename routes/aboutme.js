/**
 * aboutme.js
 *
 * This is a router file for about me page
 * Student Name: 
 * Student ID: 
 * Date: 
 */
var express = require("express");
var router = express.Router();

/* GET Aboutme page. */
router.get("/", function (req, res, next) {
  res.render("aboutme", {
    title: "Aboutme",
  });
});

module.exports = router;
