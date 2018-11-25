const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need to fix this to match favRecipe
const favRecipeSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  owner: { type: String, default: "system" },
  nameImgURL: { type: String } ,
  typeImgURL: { type: String } ,
  date: { type: Date, default: Date.now }
});

const favRecipe = mongoose.model("FavRecipe", favRecipeSchema);

module.exports = favRecipe;
