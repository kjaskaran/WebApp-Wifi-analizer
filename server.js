const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

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

// Data Parsing - Makes all the requests coming in as JSON or
// urlencoded and maked the data available in req.body (for Posts)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Morgan - HTTP request logger
//          Any http request we make
//          will be logged in terminal
app.use(morgan("tiny"));

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("webapp-client/build"));
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './webapp-client/src/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
