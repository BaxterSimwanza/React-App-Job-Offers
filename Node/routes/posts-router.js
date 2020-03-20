const express = require("express");
const router = express.Router();
const allPosts = require("../data/posts-data");

router.get("/posts", (req, res, next) => {
  res.send(allPosts);
  next();
});

module.exports = router;
