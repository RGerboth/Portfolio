var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var HomePageSchema = new Schema({
  // `title` is required and of type String
  backImg: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  message: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false
  },
});

// This creates our model from the above schema, using mongoose's model method
var HomePage = mongoose.model("HomePage", HomePageSchema);

// Export the Article model
module.exports = HomePage;