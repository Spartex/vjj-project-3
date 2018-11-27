const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need to fix this to match favRecipe
const savedRecipeSchema = new Schema({
  spoonID: { type: Number, required: true },
  sourceUrl: {type: String, required: true },
  title: { type: String, required: true },
  image: { type: String },
  readyInMinutes: { type: Number },
  preparationMinutes: { type: Number },
  cookingMinutes: { type: Number },
  recipeDetailsJSON: { type: String }
});

const savedRecipe = mongoose.model("savedRecipe", savedRecipeSchema);

module.exports = savedRecipe;
