const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioDB",
  
);


const homePage = [
  {
    bckImage: "yosemite-merced.jpg",
    message: "Hello, I am Michael",
    title: "A Full Stack Web Developer"
  }
]

db.HomePage
  .remove({})
  .then(() => db.HomePage.collection.insertMany(homePage))
  .then(data => {
    console.log(data)
    console.log(data.insertedCount + " records inserted into HomePage!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });