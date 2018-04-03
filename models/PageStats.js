var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var PageStatsSchema = new Schema({
  // `body` is of type String
  pageLoads: {
  	type: Number,
  },
  clickCount: {
  	type: Number,
  }

});

// This creates our model from the above schema, using mongoose's model method
var PageStats = mongoose.model("PageStats", PageStatsSchema);

// Export the Note model
module.exports = PageStats;
