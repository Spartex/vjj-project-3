import axios from "axios";

export default {
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
  // check if there is a user 
  checkForUser: function () {
    return axios.get("/api/auth/")
  },
  // register user
  loginUser: function (username, password) {
    let authInfo = { username, password }
    return axios.post("/api/auth/login",authInfo)
  },
  // register user
  logoutUser: function () {
    return axios.post("/api/auth/logout")
  },
  // register user
  registerNewUser: function (username, password) {
    let regInfo = { username, password }
    return axios.post("/api/auth", regInfo)
  }
};
