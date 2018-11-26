import axios from "axios";

export default {
  /* ingredient API's */

  // get dump of all ingredients
  getIngredAll: function () {
    return axios.get("/api/ingredient/all")
  },
  // Gets ingredient Group, grabs from mongoose user database
  getIngredGroup: function () {
    return axios.get("/api/ingredient/groups");
  },
  // get all the ingredients in a group
  getIngredByGroup: function (groupName) {
    const params = { group: groupName }
    return axios.get("/api/ingredient/groups", { params })
  },

   /* spoonacular API's */

  // get a list of recipes that contains those ingredients
  getRecipeList: function (ingredList) {
    const ingredStr = ingredList.join()
    const params = { 'ingredient': ingredStr }
    console.log(params)
    return axios.get("/api/recipe/ingredient", { params })
  },
  // get recipe details 
  getRecipeDetails: function (recipeID) {
    return axios.get("/api/recipe/id/" + recipeID)
  },

  /* authentication API's */

  // check if there is a user 
  checkForUser: function () {
    return axios.get("/api/auth/")
  },
  // login user
  loginUser: function (username, password) {
    let authInfo = { username, password }
    return axios.post("/api/auth/login",authInfo)
  },
  // logout user
  logoutUser: function () {
    return axios.post("/api/auth/logout")
  },
  // register user
  registerNewUser: function (username, password) {
    let regInfo = { username, password }
    return axios.post("/api/auth", regInfo)
  },

  /* User Favorite recipe functions */

  // get a list of favorites from user
  getFavOfUser: function(username) {
    let url="/api/saved/user/"+username
    return axios.get(url)
  },

  // get saved recipe
  getSavedRecipe: function (spoonID) {
    let url="/api/saved/recipe/"+spoonID
    return axios.get(url)
  },

  // add recipe ID to user favorites
  addFavToUser: function(username, spoonID) {
    let url = "/api/saved/user/add/"+username
    let reqbody = { "spoonID": spoonID}
    return axios.post(url, reqbody)
  },
  // remove recipe ID from user favorites
  removeFavFromUser: function(username, spoonID) {
    let url = "/api/saved/user/remove/"+username
    let reqbody = { "spoonID": spoonID}
    return axios.post(url, reqbody)
  },
  // add favorite recipe details to database, this is referenced by recipe ID from users
  addFavToDB: function(recipeObj) {
    return axios.post("/api/saved/recipe", recipeObj)
  }


};
