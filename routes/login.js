/**
 * login.js
 *
 * This is a router file for login page
 * Student Name: 
 * Student ID: 
 * Date: 
 */
var express = require("express");
var router = express.Router();
const userValidator = require("../validator/user");
const userCtrl = require("../controller/user");

/* GET Login page. */
router.get("/", function (req, res, next) {
  res.render("login", {
    title: "Login",
  });
});

// check username and password are correct
router.post("/login", userValidator.login, userCtrl.login);
router.post("/signup", userValidator.register, userCtrl.register);

module.exports = router;
