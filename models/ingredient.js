const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  owner: { type: String, default: "system" },
  nameImgURL: { type: String } ,
  typeImgURL: { type: String } ,
  date: { type: Date, default: Date.now }
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
