var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  subject: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var Contact = mongoose.model("Contact", ContactSchema);

// Export the Contact model
module.exports = Contact;