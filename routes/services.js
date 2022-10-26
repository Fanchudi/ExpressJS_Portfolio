/**
 * services.js
 *
 * This is a router file for services page
 * Student Name: 
 * Student ID: 
 * Date: 
 */

var express = require("express");
var router = express.Router();

/* GET Services page. */
router.get("/", function (req, res, next) {
  res.render("services", {
    title: "Services",
  });
});

module.exports = router;
