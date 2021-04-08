const db = require("./index.js");

const {model, Schema} = require("mongoose");

const ItinerarySchema = new Schema({
  start: Schema.Types.Mixed,
  end: Schema.Types.Mixed,
  waypoints: [Schema.Types.Mixed]
});

const Itinerary = model('Itinerary', ItinerarySchema);

module.exports = Itinerary;