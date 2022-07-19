const express = require('express');

const router = express.Router();

const WiviBot = require('../models/WibiBotData')

// Routes
router.get("/data", (req, res) => {
    WiviBot.find({})
      .then((data) => {
        console.log("Data: ", data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
router.get("/signal", (req, res) => {
    const data = {
      strength: -90,
    };
    res.json(data);
  });

module.exports = router;