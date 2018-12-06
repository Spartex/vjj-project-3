import React, { Component } from "react";
import "./SavedDetModal.css"

const spoonImageBase = "https://spoonacular.com/cdn/ingredients_100x100/"

const CardFooterNormal = props => {
    return (
        <div className="modal-footer">
            <a href={props.shareableURL} target="_blank"><button type="button" className="btn btn-success">Shareable Link</button></a>
            <button type="button" className="btn btn-danger" onClick={props.confirm}>Delete</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeModal}>Close</button>
        </div>
    )
}

const CardFooterDelete = props => {
    return (
        <div className="modal-footer">
            <p>Sure about Deleting?</p>
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={props.confirm}>CANCEL</button>
            <button type="button" className="btn btn-success" onClick={props.removeSaved}>OK</button>
        </div>
    )
}


export class SavedDetModal extends Component {

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
        deleteFooter: false
    }

    componentDidMount() {
        // get recipe details
        console.log(this.props.id)
        let recipeIngred = this.props.recipeDetails['extendedIngredients']
        let recipeInstr = this.props.recipeDetails['analyzedInstructions']
        let recipeSteps = []
        let foundRecipeSteps = false
        let { preparationMinutes, cookingMinutes, readyInMinutes, sourceUrl } = this.props.recipeDetails
        if (recipeInstr.length > 0) {
            recipeSteps = this.props.recipeDetails['analyzedInstructions'][0]['steps']
            foundRecipeSteps = true
        }
        console.log(this.props.recipeDetails['title'])
        console.log(this.props.recipeDetails)
        this.setState({
            recipeDetails: this.props.recipeDetails,
            recipeIngred,
            recipeSteps,
            foundRecipeSteps,
            preparationMinutes,
            cookingMinutes,
            readyInMinutes,
            sourceUrl,
            loading: false
        })
    }

    confirmDelete = (trueOrFalse) => {
        this.setState({
            deleteFooter: trueOrFalse
        })
    }


    render() {
        return (
            <div>
                <div className={this.props.modalIsOpen ? "modal fade show" : "modal fade"} style={this.props.modalIsOpen ? { display: "block" } : { display: "none" }} id="myModal">
                    <div className="modal-dialog modal-lg modalRecipeDet-dialog">
                        <div className="modal-content">

                            <div className="modal-header lsmodheader">
                                <a href={this.state.recipeDetails['sourceUrl']} target="_blank"><h4 className="modal-title lsmodheader">{this.props.title}</h4></a>
                                <button type="button" className="close" data-dismiss="modal" onClick={this.props.closeModal}>&times;</button>
                            </div>
                            <div className="modal-body modalRecipeDet-body lsmod ">
                                <img className="img-fluid modalRecipeImg" src={this.state.recipeDetails['image']} alt={this.props.title}></img>
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
                                    {this.state.recipeIngred.map(ingred => <li key={ingred.id} ><img className="ingredPic" src={spoonImageBase + ingred.image} alt={ingred.name}></img>{ingred.original}</li>)}
                                </ul>
                                <hr></hr>
                                <h4>Instructions</h4>
                                <ol>
                                    {this.state.foundRecipeSteps ? this.state.recipeSteps.map(step => <li key={step.number}>{step.step}</li>) : "See Source URL"}
                                </ol>
                            </div>
                            {this.state.deleteFooter
                                ? <CardFooterDelete confirm={()=>{this.confirmDelete(false)}} {...this.props} />
                                : <CardFooterNormal confirm={()=>{this.confirmDelete(true)}} {...this.props} />}
                        </div>
                    </div>
                </div>
                <div className={this.props.modalIsOpen ? "modal-backdrop fade show" : ""}></div>
            </div>
        )

    }

}

/*  
// recipeID:   id
// picture:  image
// ingredients: 
//  amount: extendedIngredient[X]['original']  
    pic: extendedIngredient[X]['image] 
 *  analyzedInstructions[0]['steps'][x][number] + [step
]
// readyInMinute:  
preparationMinutes
cookingMinutes: 
// dishTypes:  dishTypes
// cusine
// diets
// winePairing[pairedWines]
    URL Source: "http://cantstayoutofthekitchen.com/2014/09/27/moms-apple-pie/"
I/

*/