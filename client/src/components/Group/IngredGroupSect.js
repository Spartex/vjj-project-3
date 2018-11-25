import React from "react";
import "./IngredGroupSect.css"

export const IngredGroupSect = props => {
    return (
        <div className="card foodGroupSect">
            <div className="card-header">
                {props.prompt}
        </div>
            <div className="card-body card-columns">
                    {props.children}           
            </div>
        </div>
    )
}

