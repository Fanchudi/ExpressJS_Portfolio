/**
 * list.js
 *
 * Scheme of database for business contacts
 * 
 * Student Name: 
 * Student ID: 
 * Date: 
 */

// define data model
const mongoose = require("mongoose");
const baseModel = require("./base.js");
// create database model
const listSchema = new mongoose.Schema({
  ...baseModel,
  name: {
    type: String,
    required: true,
  },
  
  number: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = listSchema;
