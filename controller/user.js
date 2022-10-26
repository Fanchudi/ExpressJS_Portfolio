/**
 * user.js
 *
 * This is a controller js file, for managing login and signup
 * 
 * Student Name: 
 * Student ID: 
 * Date: 
 */

const { User } = require("../db");
const jwt = require("../db/utils/jwt");
const { jwtSecret } = require("../config/config.default");
// user login
exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON();
    const token = await jwt.sign(
      {
        id: user._id,
      },
      jwtSecret,
      {
        expiresIn: "7d", // set expiration duration, default is 7 days
        /**
         * 30 30s
         * 2 days
         * 10h
         * 7d
         */
      }
    );
    delete user.password;
    req.user = user;
    res.status(200).json({
      code: 200,
      msg: "login success",
      token,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// user signup
exports.register = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({
      code: 200,
      msg: "success",
    });
  } catch (error) {
    next(error);
  }
};