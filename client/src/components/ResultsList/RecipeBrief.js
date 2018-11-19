import React from "react";
import "./RecipeBrief.css"

export const RecipeBrief = props => {
    return (
        <div class="card recipeBrief">
          <img className="card-img-top" src={props.image} alt={props.title} style={{ 'width': '100%' }} />
          <div class="card-body">
            <p class="card-text">{props.title}</p>
          </div>
        </div>
    )
}

