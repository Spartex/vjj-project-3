import React from "react";
import "./IngredGroupSect.css"

export const IngredGroupSect = props => {
    return (
        <div className="card">
            <div className="card-header">
                Pick Your Ingredient
        </div>
            <div className="card-body card-columns">
                    {props.children}           
            </div>
        </div>
    )
}

