const express = require("express");
const router = express.Router();
const allUsers = require("../data/users-data");

router.get("/", (req, res, next) => {
  res.send("Home Page, try /users or /posts to get the json");
  next();
});

router.get("/users", (req, res, next) => {
  res.send(allUsers);
  next();
});

module.exports = router;
