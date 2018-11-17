const router = require("express").Router();
const axios = require("axios");

// get receipe list by ingredient
router.get("/ingredient", (req, res) => {
  console.log("api search ingredient API got called!")
  const search = req.query.ingredient
  const params = { 'ingredients': search}
  const headers = { 
    'X-Mashape-Key': process.env.SPOONKEY,
    'X-Mashape-Host': process.env.SPOONHOST
  }
  const reqConfig = { params, headers}
  const urlReq = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients"
  console.log("\n",urlReq,"\n", reqConfig)
  axios
    .get(urlReq, reqConfig)
    .then(response => {
      console.log(response.data)
      return res.json(response.data)
    })
});


// find receipe by ID
router.get("/id/:id", (req, res) => {
  console.log("api list ingredient by id API got called!")
  const id = req.params.id
  const headers = { 
    'X-Mashape-Key': process.env.SPOONKEY,
    'X-Mashape-Host': process.env.SPOONHOST
  }
  const reqConfig = { headers}
  const urlReq = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+id+"/information"
  axios
    .get(urlReq, reqConfig)
    .then(response => {
      console.log(response.data)
      return res.json(response.data)
    })
});

module.exports = router
