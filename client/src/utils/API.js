import axios from "axios";

export default {
  getIngredAll: function() {
    return axios.get("/api/ingredient/all")
  },
  // Gets ingredient Group
  getIngredGroup: function () {
    return axios.get("/api/ingredient/groups");
  },
  // get by group
  getIngredByGroup: function( groupName ) {
    const params = { group: groupName }
    return axios.get("/api/ingredient/groups", {params})
  },
  getRecipeList: function (ingredList) {
    const ingredStr = ingredList.join()
    const params = {'ingredient':ingredStr}
    console.log(params)
    return axios.get("/api/recipe/ingredient", {params})
  }

};
