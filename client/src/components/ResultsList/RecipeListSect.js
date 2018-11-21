import React from "react";
import "./RecipeListSect.css"

export const RecipeListSect = props => {
  return (
    <div className="card recipeFoundList">
      <div className="card-header"> Receipes Found</div>
      <div className="card-body recipeListColumns">
        {props.children}
      </div>
    </div>
  )
}

