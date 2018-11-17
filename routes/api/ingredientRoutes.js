const router = require("express").Router();
const db = require("../../models");

// get all ingredients
router.get("/all", (req, res) => {
  console.log("API call to get all ingredients")
  db.Ingredient
    .find()
    .then(ingredList => res.json(ingredList))
});


// get by group
// https://stackoverflow.com/questions/11973725/how-to-efficiently-perform-distinct-with-multiple-keys
router.get("/groups", (req, res) => {
  console.log("API call to list of ingredient group")
  db.Ingredient
    .aggregate(
      [ {"$group": {"_id":{ type: "$type", typeImgURL: "$typeImgURL"}}}]
    )
    .then(
      ingredList => {
        newList = ingredList.map(item => item["_id"])
        return(res.json(newList))
    })
});


// get ingredients by group
router.get("/groups/:group", (req, res) => {
  const group = req.params.group
  console.log("API call to list of ingredients within group: ", group)
  db.Ingredient
    .find({type: group.toLowerCase()})
    .then(ingredList => res.json(ingredList))
});

module.exports = router
