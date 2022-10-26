/**
 * App.js
 *
 * This file creates an express application naed as app.
 * Student Name: Chuqi Fan
 * Student ID: 301090064
 * Date: 2022-10-20
 */

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./db");

// import router
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");
var homeRouter = require("./routes/homepage");
var aboutmeRouter = require("./routes/aboutme");
var projectsRouter = require("./routes/projects");
var servicesRouter = require("./routes/services");
var contactMeRouter = require("./routes/contactMe");
var bussinessContactRouter = require("./routes/bussinessContact");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views/partials"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// use router
app.use("/", homeRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/homepage", homeRouter);
app.use("/aboutme", aboutmeRouter);
app.use("/projects", projectsRouter);
app.use("/services", servicesRouter);
app.use("/contactMe", contactMeRouter);
app.use("/bussinessContact", bussinessContactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
