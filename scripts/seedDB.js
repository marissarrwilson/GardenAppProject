const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gardenapp", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const gardenSeed = [
  {
    name: "Carrot",
    status: "Planted",
    sqft: 50,
    description: "Planted 100 carrot seeds!",
    postDate: new Date(Date.now()),
    plantedDate: "2020-11-25",
  },
  {
    name: "Peas",
    status: "Harvested",
    sqft: 50,
    description: "Harvested peas today!",
    postDate: new Date(Date.now()),
    plantedDate: "2020-09-25",
    harvestWeight: "5 lbs",
  },
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(gardenSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
