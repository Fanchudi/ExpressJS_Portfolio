/**
 * user.js
 *
 * Scheme of database for website users
 * 
 * Student Name: 
 * Student ID: 
 * Date: 
 */
//database user model
const mongoose = require("mongoose");
const baseModel = require("./base.js");
const md5 = require("./utils/md5");
// user schema
const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // Password encrypt by md5
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
  },
  emailAddress: {
    type: String,
    required: true,
  },
});

module.exports = userSchema;
