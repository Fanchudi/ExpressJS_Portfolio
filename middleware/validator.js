/**
 * validator.js
 *
 * validation file
 * 
 * Student Name: 
 * Student ID: 
 * Date: 
 */
const { validationResult, buildCheckFunction } = require("express-validator");

exports = module.exports = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(200).json({
      code: 500,
      msg: errors.array(),
    });
  };
};
