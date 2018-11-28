const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jjvproject3"
);


const ingredientSeed = [
  {
    name: "Broccoli",
    type: "vegetable",
    owner: "system",
    nameImgURL: "./assets/images/testimage.jpg",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Asparagus",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Carrot",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Onion",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Mushroom",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Peas",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Beef",
    type: "meat",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Pork",
    type: "meat",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Chicken",
    type: "meat",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Turkey",
    type: "meat",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Lamb",
    type: "meat",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Duck",
    type: "meat",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Venison",
    type: "meat",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Wild Boar",
    type: "meat",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "John Egg",
    type: "egg",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Fish",
    type: "seafood",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },

  {
    name: "Chocolate Sauce",
    type: "Junk Food",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },

  {
    name: "Ice Cream",
    type: "Junk Food",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },

  {
    name: "Lobster",
    type: "seafood",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Crab",
    type: "seafood",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Squid",
    type: "seafood",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Clam",
    type: "seafood",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Apple",
    type: "fruit",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Banana",
    type: "fruit",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Pear",
    type: "fruit",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "White Rice",
    type: "grain",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Brown Rice",
    type: "grain",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Bread",
    type: "grain",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Milk",
    type: "dairy",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Cheese",
    type: "dairy",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
  {
    name: "Yogurt",
    type: "dairy",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "https://via.placeholder.com/150"
  },
];

db.Ingredient
  .remove({})
  .then(() => db.Ingredient.collection.insertMany(ingredientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
