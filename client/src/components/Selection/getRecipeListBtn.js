import React from "react";
import "./getRecipeListBtn.css"

export const GetRecipeListBtn = props => {
    return (
        <button onClick={props.action} className="btn btn-secondary getRecipeList btn-block">{props.children}</button>
      )
}

