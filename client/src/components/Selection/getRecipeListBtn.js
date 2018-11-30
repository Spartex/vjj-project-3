import React from "react";
import "./getRecipeListBtn.css"

export const GetRecipeListBtn = props => {
    return (
        <button disabled={props.searching} onClick={props.action} className="btn btn-secondary getRecipeList btn-block searchbtn">{props.searching ? "Searching..." : props.children}</button>
      )
}

