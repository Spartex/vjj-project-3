const router = require("express").Router();
const db = require("../../models");

// get all saved recipes
router.get("/user/:username", (req, res) => {
  console.log("API call to get all saved recipes by ", req.params.username)
  db.User.find({ username: req.params.username })
    .then(saved => {
      let results = {}
      results['userFound'] = true
      if (!saved[0]) {
        results['userFound'] = false
        results['savedRecipes'] = []
      } else {
        results['savedRecipes'] = saved[0]["savedRecipes"]
      }
      res.json(results)
    })
    .catch(err => res.status(422).json(err))
});


// add recipe to username list of favorites
router.post("/user/add/:username", (req, res) => {
  console.log("API call to append recipe ID to userName")
  console.log("Can I see: ", req.body['spoonID'])

  // let's see if we can find the user.  
  db.User.find({ username: req.params.username })
    .then(saved => {
      let results = {}
      results['userFound'] = false
      results['savedRecipes'] = []
      results['added'] = false
      console.log(saved)
      // user not found, do not add
      if (!saved[0]) {
        res.json(results)
      } else {
        // user found, let's work on adding the recipe
        results['userFound'] = true
        results['savedRecipes'] = saved[0]["savedRecipes"]
        // if the recipe is not already on the favorite list, let's add
        if (results['savedRecipes'].indexOf(req.body['spoonID']) < 0) {

          results['savedRecipes'].unshift(req.body['spoonID'])
          console.log("------>", results['savedRecipes'])
          db.User.updateOne({ username: req.params.username }, { savedRecipes: results['savedRecipes'] }, { upsert: true, new: true })
            .then(() => {
              results['added'] = true
              res.json(results)
            })
        } else {
          // if recipe is already on the favorite list, no need to add
          res.json(results)
        }
      }
    })
    .catch(err => res.status(422).json(err))
});


// delete recipe to username list of favorites
router.post("/user/remove/:username", (req, res) => {
  console.log("API call to delete recipe ID to userName")
  console.log("Can I see: ", req.body['spoonID'])

  // let's see if we can find the user.  
  db.User.find({ username: req.params.username })
    .then(saved => {
      let results = {}
      results['userFound'] = false
      results['savedRecipes'] = []
      results['removed'] = false
      console.log(saved)
      // user not found, do not add
      if (!saved[0]) {
        res.json(results)
      } else {
        // user found, let's work on removing the recipe
        results['userFound'] = true
        results['savedRecipes'] = saved[0]["savedRecipes"]
        // if the recipe is not already on the favorite list, let's add
        console.log("Before: ", results['savedRecipes'])
        let newResults = results['savedRecipes'].filter(el => el != req.body['spoonID'])
        if (newResults.length < results['savedRecipes'].length) {
          db.User.updateOne({ username: req.params.username }, { savedRecipes: newResults }, { upsert: true, new: true })
          .then(() => {
            results['removed'] = true
            results['savedRecipes'] = newResults
            res.json(results)
          })
        } else {
          res.json(results)
        }
  
      }
    })
    .catch(err => res.status(422).json(err))
});



// get specific saved recipe by spoonID
router.get("/recipe/:spoonID", (req, res) => {
  console.log("API call for recipe with ID ", req.params.spoonID)
  spoonID = parseInt(req.params.spoonID)
  db.Saved.find({ spoonID: spoonID })
    .then(saved => {
      return res.json(saved)
    })
    .catch(err => res.status(422).json(err))
});


// add new saved recipes to DB and to username
// this is to add and overwrite existing at the specified ID
// https://stackoverflow.com/questions/7267102/how-do-i-update-upsert-a-document-in-mongoose
router.post("/recipe", (req, res) => {
  console.log("API call to add new recipe")
  console.log("Can I see: ", req.body['spoonID'])
  // add recipe to saved list   
  let query = { 'spoonID': req.body['spoonID'] }
  db.Saved.findOneAndUpdate(query, req.body, { upsert: true, new:true})
    .then(saved => {
      res.json(saved)
    })
    .catch(err => res.status(422).json(err))
});





// delete
router.delete("recipe/:username", (req, res) => {
  const group = req.params.group
  console.log("API call to add new recipe by username", group)
  db.SavedRecipe
    .find({ type: group.toLowerCase() })
    .then(ingredList => res.json(ingredList))
});

module.exports = router
