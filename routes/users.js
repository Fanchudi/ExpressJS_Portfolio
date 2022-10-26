/**
 * users.js
 *
 * This is a router file for users page
 * Student Name: 
 * Student ID: 
 * Date: 
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
