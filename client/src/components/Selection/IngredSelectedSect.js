import React from "react";
import "./IngredSelectedSect.css"

export const IngredSelectedSect = props => {
    return (
      <div className="card selectedIngred">
      <div className="card-header">
        Ingredient List Selected
      </div>
      <ul className="list-group list-group-flush">
        {props.children}
      </ul>
    </div>
      )
}

