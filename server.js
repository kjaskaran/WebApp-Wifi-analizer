const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

// Atlas - Database Access - MongoDB Users password - QGx6rTpqiM11prDj
// const MONGODB_URI =
//   "mongodb+srv://kjaskaran:QGx6rTpqiM11prDj@clusterjk.z1qwasf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wivibot", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!");
});


// Saving data to mongoDB database
// const data = {
//   latitude: 43.39086,
//   longitude: -80.41518,
//   signalStrength: -90,
// };

// Creating instance of the model
// Passing data to the new instance
// const newWiviBot = new WiviBot(data);

// .save() method
// newWiviBot.save((err) => {
//   if (err) {
//     console.log("Oops! Error saving data");
//   } else {
//     console.log('Data saved successfully!')
//   }
// });

// Morgan - HTTP request logger
//          Any http request we make
//          will be logged in terminal
app.use(morgan("tiny"));

app.use('/api', routes);
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
