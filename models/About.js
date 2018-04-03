var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var AboutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bioImg: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  backImg: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },  
  title: {
    type: String,
    required: false
  },
  facebookURL: {
    type: String,
    required: false
  },
  githubURL: {
    type: String,
    required: false
  },
  linkedinURL: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var About = mongoose.model("About", AboutSchema);

// Export the Article model
module.exports = About;