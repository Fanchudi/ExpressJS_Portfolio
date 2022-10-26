/**
 * businessContact.js
 *
 * This is a router file for business contact page
 * Student Name: 
 * Student ID: 
 * Date: 
 */
var express = require("express");
var router = express.Router();
var { List } = require("../db");

/* GET Bussiness Contact page. */
router.get("/", async (req, res, next) => {
  res.render("bussinessContact", {
    title: "Bussiness Contact",
  });
});

// get bussiness contact list
router.get("/list", async (req, res) => {
  const items = await List.find();
  res.status(200).json({
    code: 200,
    msg: "success",
    data: items,
  });
});

// add bussiness contact data
router.post("/list/add", async (req, res) => {
  const list = new List(req.body);
  await list.save();
  res.status(200).json({
    code: 200,
    msg: "success",
  });
});

// update bussiness contact data by id
router.post("/list/:id", async (req, res) => {
  let id = req.params.id;
  let str = { $set: req.body };
  const promise = new Promise((resolve, reject) => {
    List.updateOne({ _id: id }, str, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
  promise
    .then((data) => {
      res.status(200).json({
        code: 200,
        msg: "success",
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

// delete bussiness data by id
router.delete("/list/:id", async (req, res) => {
  let id = req.params.id;
  const model = await List.findByIdAndDelete(id);
  res.status(200).json({
    code: 200,
    msg: "success",
  });
});
module.exports = router;
