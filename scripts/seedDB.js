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
    typeImgURL: "./assets/images/vegetables.png"
  },
  {
    name: "Asparagus",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/vegetables.png"
  },
  {
    name: "Carrot",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/vegetables.png"
  },
  {
    name: "Onion",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/vegetables.png"
  },
  {
    name: "Mushroom",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/vegetables.png"
  },
  {
    name: "Peas",
    type: "vegetable",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/vegetables.png"
  },
  {
    name: "Beef",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },
  {
    name: "Pork",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },
  {
    name: "Chicken",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },
  {
    name: "Turkey",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },
  {
    name: "Lamb",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },
 
  {
    name: "Fish",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },

  {
    name: "Chocolate Sauce",
    type: "Sweets",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/cupcake.png"
  },

  {
    name: "Ice Cream",
    type: "Sweets",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/cupcake.png"
  },

  {
    name: "Lobster",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },
  {
    name: "Crab",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },
  {
    name: "Squid",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },
  {
    name: "Clam",
    type: "Protein",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/protein.png"
  },
  {
    name: "Apple",
    type: "fruit",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/fruits.png"
  },
  {
    name: "Banana",
    type: "fruit",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/fruits.png"
  },
  {
    name: "Pear",
    type: "fruit",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/fruits.png"
  },
  {
    name: "White Rice",
    type: "grain",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/grain.png"
  },
  {
    name: "Brown Rice",
    type: "grain",
    owner: "system",
    nameImgURL: "https://via.placeholder.com/150",
    typeImgURL: "./assets/images/grain.png"
  },
  {
    name: "Bread",
    type: "grain",
    owner: "system",
    nameImgURL: "./assets/images/bread.png",
    typeImgURL: "./assets/images/grain.png"
  },
  {
    name: "Milk",
    type: "dairy",
    owner: "system",
    nameImgURL: "./assets/images/milk.png",
    typeImgURL: "./assets/images/milk_1.png"
  },
  {
    name: "Cheese",
    type: "dairy",
    owner: "system",
    nameImgURL: "./assets/images/cheese.png",
    typeImgURL: "./assets/images/milk_1.png"
  },
  {
    name: "Yogurt",
    type: "dairy",
    owner: "system",
    nameImgURL: "./assets/images/yogurt.png",
    typeImgURL: "./assets/images/milk_1.png"
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
