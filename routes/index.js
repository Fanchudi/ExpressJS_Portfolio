/**
 * index.js
 *
 * This is a router file for index page
 * Student Name: 
 * Student ID: 
 * Date: 
 */
var express = require("express");
var router = express.Router();

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("login", { title: "Login" });
});
module.exports = router;
