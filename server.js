var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
require ("./controllers/apiRoutes")

// Require all models
var db = require("./models");

var PORT = process.env.PORT || 3001;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static("client/build"));
//app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
} else {
 app.use(express.static("public"));
}

require("./controllers/apiRoutes.js")(app);
require("./controllers/htmlRoutes.js")(app);


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolioDB";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, 
	{
		useMongoClient: true
	});


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
