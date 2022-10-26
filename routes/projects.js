/**
 * projects.js
 *
 * This is a router file for projects page
 * Student Name: 
 * Student ID: 
 * Date: 
 */
var express = require("express");
var router = express.Router();

/* GET Projects page. */
router.get("/", function (req, res, next) {
  res.render("projects", {
    title: "Projects",
  });
});

module.exports = router;
