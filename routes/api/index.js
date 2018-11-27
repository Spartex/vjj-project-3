const path = require("path");
const router = require("express").Router();

// get recipe from spoonacular API  
const recipeRoutes = require("./recipeRoutes");  

// get ingredients from mongoDB
const ingredientRoutes = require("./ingredientRoutes");

// authentication api calls to login, register, and check for user
const userRoutes = require("./userRoutes");

// save receipes routes: delete, add
const saveRecipeRoutes = require("./saveRecipeRoutes")

// api Routes
router.use("/recipe",recipeRoutes)
router.use("/ingredient",ingredientRoutes)
router.use("/auth",userRoutes)
router.use("/saved", saveRecipeRoutes)

module.exports = router;

