var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var PortfolioSchema = new Schema({

  portImg: {
    type: String,
    required: true
  },
  sortOrder: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  portDes: {
    type: String,
    required: true
  },
  githubURL: {
    type: String,
    required: true
  },
  liveLink: {
    type: String,
    required: true
  },
  portfolioClicks:
    {
      type: Number,
      required: false
    }
});

// This creates our model from the above schema, using mongoose's model method
var Portfolio = mongoose.model("Portfolio", PortfolioSchema);

// Export the Article model
module.exports = Portfolio;