import React from "react";
import "./RecipeBrief.css"

export const RecipeBrief = props => {
  return (
    <div className="card recipeBrief" onClick={props.openModal}>
      <img className="card-img-top" src={props.image} alt={props.title} style={{ 'width': '100%' }} />
      <div className="card-body">
        <p className="card-text">{props.title}</p>
      </div>
    </div>
  )
}

