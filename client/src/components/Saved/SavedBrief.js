import React from "react";
import "./SavedBrief.css"

export const SavedBrief = props => {
  return (
    <div className="card savedBrief" onClick={props.openModal} style={{display: props.displayOn ? 'inline-block' : 'none' }}>
      <img className="card-img-top" src={props.image} alt={props.title} style={{ 'width': '100%' }} />
      <div className="card-body">
        <p className="card-text">{props.title}</p>
      </div>
    </div>
  )
}

