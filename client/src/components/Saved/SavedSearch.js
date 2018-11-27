import React from "react";
import "./SavedSearch.css"

export const SavedSearch = props => {
  return (
    <div className="searchSaved input-group mb-3">
      <input type="text" className="form-control" name="searchTitle" value={props.searchTitle} onChange={props.handleChange} placeholder="Enter string here to search titles for recipe" />
    </div>
  )
}

