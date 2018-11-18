import React from "react";
import "./IngredAdd.css"

export const IngredAdd = props => {
    return (
        <li className="list-group-item">{props.children}<button className="float-right" onClick={props.deleteMe}>&times;</button></li>
      )
}

