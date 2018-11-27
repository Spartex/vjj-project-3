import React from "react";
import "./SavedListSect.css"

export const SavedListSect = props => {
  return (
    <div className="card savedList">
      <div className="card-header">{props.banner}</div>
      <div className="card-body savedListColumns">
        {props.children}
      </div>
    </div>
  )
}

