const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioDB",
  
);

const portfolio = [
  {
    portImg: "http://via.placeholder.com/250x250",
    sortOrder: 0,
    name: "Project One Name",
    portDes: "A cool project",
    githubURL: "https://github.com/kovacicmichael/FriendFinder/blob/master/README.md",
    liveLink: "https://github.com",
    portfolioClicks: 0
  },
  {
    portImg: "http://via.placeholder.com/250x250",
    sortOrder: 1,
    name: "Project Two Name",
    portDes: "Another cool project",
    githubURL: "https://github.com/kovacicmichael/FriendFinder/blob/master/README.md",
    liveLink: "https://github.com",
    portfolioClicks: 0
  }
]

db.Portfolio
  .remove({})
  .then(() => db.Portfolio.collection.insert(portfolio))
  .then(data => {
    console.log(data)
    console.log(data.insertedCount + " records inserted into Portfolio!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
