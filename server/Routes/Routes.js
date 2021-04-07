var express = require("express");
var router = express.Router();
const path = require("path");
const controller = require('../controllers');

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

router.get("/itinerary/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

router.get('/db/:id', (req, res) => {
  controller.retrieveOne(req, res);
})

router.post('/db', (req, res) => {
  controller.createOne(req, res);
})

module.exports.router = router;
