var express = require("express");
var router = express.Router();
const path = require("path");

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

router.get("/itinerary/:id", (req, res) => {
  res.send(path.join(__dirname, "..", "dist"));
});

module.exports.router = router;
