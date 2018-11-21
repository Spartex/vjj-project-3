import React, { Component } from "react";
import API from "../../utils/API"
import "./RecipeDetModal.css"

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

export class RecipeDetModal extends Component {

    state = {
        loading: true,
        recipeDetails: {}
    }

    componentDidMount() {
        // get recipe details
        console.log("Loading the Data formthe API for recipe details?")
        console.log(this.props.id)
        /*  disabled to save API data
        API.getRecipeDetails(this.props.id)
            .then(res => {
                console.log("Loading the Data formthe API for recipe details?")
                console.log(res.data)
            })
        */
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div>
                <div className={this.props.modalIsOpen ? "modal fade show" : "modal fade"} style={this.props.modalIsOpen ? { display: "block" } : { display: "none" }} id="myModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.title}</h4>
                                <button type="button" className="close" data-dismiss="modal" onClick={this.props.closeModal}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <img src={this.props.image} alt={this.props.title}></img>
                                <h4> { this.state.loading ? "Loading Recipe Information..." : "" } </h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger">Save</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.props.modalIsOpen ? "modal-backdrop fade show" : ""}></div>
            </div>
        )

    }

}

