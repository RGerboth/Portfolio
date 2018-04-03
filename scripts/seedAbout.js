const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioDB",
  
);

const about = [
  {
    name: "Michael",
    bioImg: "http://via.placeholder.com/225x225",
    bio: "This is a little about myself",
    backImg: "https://",
    message: "Hello World!",
    title: "Full stack developer.",
    facebookURL: "https://facebook.com",
    githubURL: "https://github.com",
    linkedinURL: "https://linkedin.com",
    email: "you@email.com",
    phone: "3035551212"
  }
]

db.About
  .remove({})
  .then(() => db.About.collection.insertMany(about))
  .then(data => {
    console.log(data)
    console.log(data.insertedCount + " records inserted into About!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });