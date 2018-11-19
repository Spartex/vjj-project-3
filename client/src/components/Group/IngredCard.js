import React from "react";
import "./IngredCard.css"

export const IngredCard = props => {
    return (
        <div key={props.ingredName} className="card cardIngred img-fluid" onClick = {props.addToList}>
          <img className="card-img-top" src={props.ingredImgURL} alt={props.ingredName.toUpperCase()} />
          <div className="card-img-overlay">
            <h4 className="card-text">{props.ingredName.toUpperCase()}</h4>
          </div>
        </div>
      )
}

