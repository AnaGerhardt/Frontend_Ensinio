const app = require("express")();
const obj = require("../db.json");

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(obj.data);
});

module.exports = app;
