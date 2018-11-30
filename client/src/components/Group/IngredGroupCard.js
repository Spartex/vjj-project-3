import React from "react";
import "./IngredGroupCard.css"

export const IngredGroupCard = props => {
    return (
        <div key={props.type} className="card cardIngredGroup img-fluid" onClick = {props.modalOpen}>
          <img className="card-img-top rounded-circle" src={props.typeImgURL} alt={props.type.toUpperCase()} />
          <div className="card-img-overlay">
            <h4 className="card-text">{props.type.toUpperCase()}</h4>
          </div>
        </div>
      )
}

