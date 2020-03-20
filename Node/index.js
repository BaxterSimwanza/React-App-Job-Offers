const express = require("express");
const app = express();

app.use("/", require("./routes/users-router"));
app.use("/", require("./routes/posts-router"));

const PORT = 5000;
app.listen(PORT, "127.0.0.1", () =>
  console.log("Running server on port: " + PORT)
);
