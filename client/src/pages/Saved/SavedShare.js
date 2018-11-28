import React, { Component } from "react";
import API from "../../utils/API"
import "./SavedShare.css"


const spoonImageBase = "https://spoonacular.com/cdn/ingredients_100x100/"



export class SavedShare extends Component {

  state = {
    loading: true,
    recipeDetails: {},
    recipeIngred: [],
    recipeSteps: [],
    recipeSrcURL: "",
    readyInMinutes: 0,
    preparationMinutes: 0,
    cookingMinutes: 0,
    foundRecipeSteps: false,
    sourceUrl: "",
    title: ""
  }

  componentDidMount() {
    // get Recipe Details
    console.log("Mounting: ", this.props.match.params.spoonID)
    API.getSavedRecipe(this.props.match.params.spoonID)
      .then(res => {
        if (res.data.length > 0) {
          let recipeDetails = JSON.parse(res.data[0]['recipeDetailsJSON'])
          console.log(recipeDetails)
          let recipeIngred = recipeDetails['extendedIngredients']
          let recipeInstr = recipeDetails['analyzedInstructions']
          let recipeSteps = []
          let foundRecipeSteps = false
          let { preparationMinutes, cookingMinutes, readyInMinutes, sourceUrl, title } = recipeDetails
          if (recipeInstr.length > 0) {
            recipeSteps = recipeDetails['analyzedInstructions'][0]['steps']
            foundRecipeSteps = true
          }
          this.setState({
            recipeDetails,
            recipeIngred,
            recipeSteps,
            foundRecipeSteps,
            preparationMinutes,
            cookingMinutes,
            readyInMinutes,
            sourceUrl,
            title
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="shareContainer" >
        <div className="card recipeShareCard">
          <div className="card-header text-center"><a href={this.state.sourceUrl}><h4>{this.state.title}</h4></a></div>
          <div className="card-body">
            <div className="text-center"> <img className="img-fluid recipeShareImg" src={this.state.recipeDetails['image']} alt={this.props.title}></img> </div>
            <hr></hr>
            Recipe Src: <a href={this.state.sourceUrl} target="_blank">{this.state.sourceUrl}</a>
            <hr></hr>
            <div className="row">
              <div className="col col-xs-4">Ready Time </div>
              <div className="col col-xs-4">Prep Time </div>
              <div className="col col-xs-4">Cook Time </div>
            </div>
            <div className="row">
              <div className="col col-xs-4">{(this.state.readyInMinutes > 0) ? (this.state.readyInMinutes + "mins") : "N/A"} </div>
              <div className="col col-xs-4">{(this.state.preparationMinutes > 0) ? (this.state.preparationMinutes + "mins") : "N/A"} </div>
              <div className="col col-xs-4">{(this.state.cookingMinutes > 0) ? (this.state.cookingMinutes + "mins") : "N/A"} </div>
            </div>
            <hr></hr>
            <h4>Ingredients</h4>
            <ul>
              {this.state.recipeIngred.map(ingred => <li key={ingred.id} ><img className="ingredSharePic" src={spoonImageBase + ingred.image} alt={ingred.name}></img>{ingred.original}</li>)}
            </ul>
            <hr></hr>
            <h4>Instructions</h4>
            <ol>
              {this.state.foundRecipeSteps ? this.state.recipeSteps.map(step => <li key={step.number}>{step.step}</li>) : "See Source URL"}
            </ol>
          </div>
        </div>
      </div>

    )
  }
}

