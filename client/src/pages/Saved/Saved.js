import React, { Component } from "react";
import NavBar from "../../components/NavBar"
import API from "../../utils/API"
import { RecipeBrief } from "../../components/Saved"

class Saved extends Component {
  state = {
    username: "",
    loggedIn: false,
    savedRecipesBrief: [],
    savedRecipesDetail: [],
  }

  componentDidMount() {
    API.checkForUser()
      .then(res => {
        console.log(res.data)
        if (!res.data['user']) {
          console.log("No user found!")
          this.props.history.push({
            pathname: '/login'
          })
        } else {
          this.setState({
            loggedIn: true,
            username: res.data['user']['username']
          })
          API.getFavOfUser(res.data['user']['username'])
            .then(res => { 
              console.log("Favorites List:", res.data['savedRecipes'])
              res.data['savedRecipes'].forEach(element => {
                console.log("--->", element)
                let savedRecipeList = []
                API.getSavedRecipe(element)
                  .then(res2 => {
                    console.log("Did i grab stuff for", element)
                    savedRecipeList = this.state.savedRecipesDetail
                    savedRecipeList.push(res2.data[0])
                    this.setState({
                      savedRecipesDetail: savedRecipeList
                    })
                  })
              });

              this.setState({
                savedRecipesBrief: res.data['savedRecipes']
              })
            })
        }
      })
  }



  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <h4>I am on Saved Page with {this.state.username}</h4>
        <ul>
          {this.state.savedRecipesDetail.map( recipe => {
            return <RecipeBrief 
              key={recipe.spoonID}
              image={recipe.image} 
              title={recipe.title}
            />
          })}
        </ul>
      </div>
    
    )
  }
}

export default Saved;
