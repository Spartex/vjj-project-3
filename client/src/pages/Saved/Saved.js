import React, { Component } from "react";
import NavBar from "../../components/NavBar"
import API from "../../utils/API"
import { SavedBrief, SavedListSect, SavedSearch, SavedDetModal } from "../../components/Saved"

export class Saved extends Component {
  state = {
    username: "",
    loggedIn: false,
    savedRecipeIDs: [], // stores just the spoonID
    savedRecipesDetail: [],  // stores full details
    searchTitle: "",
    displayRecipe: {},
    modalIsOpen: {}
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
              // res.data['savedRecipes'] is an array of ID's for saved recipes
              console.log("Favorites List:", res.data['savedRecipes'])




              let displayRecipe = {} // store toggle, to be used for search filter later
              let modalIsOpen = {}  // store modal open status

              // go through each element in the array of spoon ID's
              // and query for the full recipe details 
              res.data['savedRecipes'].forEach(element => {
                console.log("--->", element)
                let savedRecipeList = []
                // search for saved recipe by spoon ID
                API.getSavedRecipe(element)
                  .then(res2 => {
                    console.log("Did i grab stuff for", element)
                    savedRecipeList = this.state.savedRecipesDetail

                    // initialize display for Modal and the Brief display
                    displayRecipe[element] = true
                    modalIsOpen[element] = false

                    // push recipe details into List 
                    let tempDetails = res2.data[0]
                    tempDetails['recipeDetails'] = JSON.parse(res2.data[0]['recipeDetailsJSON'])
                    savedRecipeList.push(tempDetails)
                    this.setState({
                      savedRecipesDetail: savedRecipeList
                    })
                  })
              });

              this.setState({
                displayRecipe,
                modalIsOpen,
                savedRecipeIDs: res.data['savedRecipes']
              })
            })
        }
      })
  }

  openModal = (recipeID) => {
    console.log("clicked Open Modal", recipeID)
    let modalIsOpenCopy = this.state.modalIsOpen
    modalIsOpenCopy[recipeID] = true
    console.log("Open modal for: ", recipeID)
    this.setState({
      modalIsOpen: modalIsOpenCopy
    })
  }

  closeModal = (recipeID) => {
    let modalIsOpenCopy = this.state.modalIsOpen
    console.log("clicked close Modal", recipeID)
    modalIsOpenCopy[recipeID] = false
    console.log("Close modal for: ", recipeID)
    this.setState({
      modalIsOpen: modalIsOpenCopy
    })
  }

  // remove saved recipe from user's shared
  removeSaved = (recipeID) => {
    console.log("will remove", recipeID, "from user", this.state.username)
    API.removeFavFromUser(this.state.username, recipeID)
      .then((res) => {
        this.closeModal(recipeID)
        console.log("successfull removed ", res.data)
        console.log("Before", this.state.savedRecipesDetail)
        let savedRecipesDetail = this.state.savedRecipesDetail.filter(recipe => recipe.spoonID !== recipeID)
        console.log("After", savedRecipesDetail)
        this.setState({
          savedRecipesDetail
        })
      })
  }

  // update the display based on the filter
  updateDisplayRecipe = (searchText) => {
    let savedRecipesDetail = this.state.savedRecipesDetail
    let displayRecipe = {}
    console.log("Before", this.state.displayRecipe)
    // loops through the recipe details to see if there is a match in the title
    // recreates the display filter
    savedRecipesDetail.forEach(recipe => {
      console.log(recipe.title.toLowerCase(), " and ", searchText.toLowerCase())
      if (recipe.title.toLowerCase().includes(searchText.toLowerCase())) {
        displayRecipe[recipe.spoonID] = true
      } else {
        displayRecipe[recipe.spoonID] = false
      }
    })
    console.log("After",displayRecipe)
    this.setState({
      displayRecipe
    })
  }


  // display the text on the search box and call the update display to filter recipe
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      console.log(this.state.searchTitle)
      this.updateDisplayRecipe(this.state.searchTitle)
    })
  }




  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <div className="container">
          <SavedSearch searchTitle={this.state.searchTitle} handleChange={this.handleChange} />
          <SavedListSect banner={"Saved Recipes for " + this.state.username}>
            {this.state.savedRecipesDetail.map(recipe => {
              return (
                <div key={recipe.spoonID}>
                  <SavedBrief
                    displayOn={this.state.displayRecipe[recipe.spoonID]}
                    image={recipe.image}
                    title={recipe.title}
                    id={recipe.spoonID}
                    openModal={() => this.openModal(recipe.spoonID)}
                  />
                  <SavedDetModal
                    username={this.state.username}
                    title={recipe.title}
                    id={recipe.spoonID}
                    shareableURL={"/saved/share/" + recipe.spoonID}
                    recipeDetails={recipe.recipeDetails}
                    modalIsOpen={this.state.modalIsOpen[recipe.spoonID]}
                    removeSaved={() => this.removeSaved(recipe.spoonID)}
                    closeModal={() => this.closeModal(recipe.spoonID)}
                  />
                </div>
              )
            })}
          </SavedListSect>
        </div>
      </div>

    )
  }
}

