const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioDB",
  
);

const contact = [
  {
    name: "Joe Manager",
    email: "Joe@hiringcompany.com",
    subject: "You're hired!",
    message: "When can you start?"
  
  },
  {
    name: "Jane HR Director",
    email: "Jane@hiringcompany.com",
    subject: "Inteview!",
    message: "When can you come in?"
  
  },

]

db.Contact
  .remove({})
  .then(() => db.Contact.collection.insertMany(contact))
  .then(data => {
    console.log(data)
    console.log(data.insertedCount + " records inserted into Contact!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });