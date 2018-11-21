import React from "react";
import "./recipeDetModal.css"

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

export const RecipeDetModal = props => {
    return (
        <div>
            <div className={props.modalIsOpen ? "modal fade show" : "modal fade"} style={props.modalIsOpen ? { display: "block" } : { display: "none" }} id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Add your {props.type}</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={props.closeModal}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="card-columns">
                                {props.children}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={props.modalIsOpen ? "modal-backdrop fade show" : ""}></div>
        </div>
    )
}

