/**
 * index.js
 *
 * Connect and manage MongoDB database
 * 
 * Student Name: 
 * Student ID: 
 * Date: 
 */

// import mongoose
const mongoose = require("mongoose");

// default connection
mongoose.connect("mongodb://localhost:27017/ejs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// get connection
const db = mongoose.connection;

db.once("open", () => {
  console.log("database connect successfully");
});

// binding to error event
db.on("error", () => {
  console.log("database connect failed");
});


// export module
module.exports = {
  User: mongoose.model("User", require("./user")),
  List: mongoose.model("List", require("./list")),
};
