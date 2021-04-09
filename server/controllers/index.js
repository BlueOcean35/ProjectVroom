const Itinerary = require('../db/Itinerary.js');
const db = require('../db');
var ObjectId = require('mongodb').ObjectId;

exports.createOne = (req, res) => {
  Itinerary.create(req.body)
    .then((data) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.error('error creating itinerary: ', err);
      res.sendStatus(500);
    });
};

exports.retrieveOne = (req, res) => {
  Itinerary.find(ObjectId(req.params.id))
    .then((data) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error('error retrieving itinerary: ', err);
      res.sendStatus(500);
    });
};
