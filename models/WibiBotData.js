const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const WiviBotSchema = new Schema({
  latitude: Number,
  longitude: Number,
  signalStrength: Number,
  date: {
    type: String,
    default: Date.now(),
  },
});

// Model
const WiviBot = mongoose.model('WiviBot', WiviBotSchema);

module.exports = WiviBot;