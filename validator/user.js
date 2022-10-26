const validator = require("../middleware/validator");
const { User } = require("../db");
const { body } = require("express-validator");
const md5 = require("../db/utils/md5");

exports.register = validator([
  // check the user is existed
  body("username")
    .bail()
    .custom(async (username) => {
      const user = await User.findOne({
        username,
      });
      if (user) {
        return Promise.reject(
          "The user you were trying to create already exists."
        );
      }
    }),
]);

exports.login = [
  validator([
    // check the user exist
    body("username").custom(async (username, { req }) => {
      const user = await User.findOne({
        username,
      });
      if (!user) {
        return Promise.reject("The user does not exist");
      }
      req.user = user;
    }),
  ]),
  validator([
    // check the password correct
    body("password").custom(async (password, { req }) => {
      if (req.user.password === md5(password)) {
      } else {
        return Promise.reject("The password is incorrect");
      }
    }),
  ]),
];