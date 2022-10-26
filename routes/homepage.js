/**
 * homepage.js
 *
 * This is a router file for homepage page
 * Student Name: 
 * Student ID: 
 * Date: 
 */
var express = require("express");
var router = express.Router();

/* GET Homepage page. */
router.get("/", function (req, res, next) {
  res.render("homepage", {
    title: "Homepage",
  });
});

module.exports = router;
