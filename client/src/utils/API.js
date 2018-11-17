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
  }

};
