require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./models");
const path = require("path");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev")); //added
app.use(//added
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json());//added
// Sessions added
app.use(
  session({
    secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, // required
    saveUninitialized: false // required
  })
)
// Passport
app.use(passport.initialize());
app.use(passport.session()) // calls the deserializer

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Define API routes here
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jjvproject3");


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Starting Server
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
