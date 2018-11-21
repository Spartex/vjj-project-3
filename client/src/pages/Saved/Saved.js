import React, { Component } from "react";
import NavBar from "../../components/NavBar"

class Saved extends Component {
  state = {
    books: [],
    loading: false
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>I am on Saved Page</h1>
      </div>
    
    )
  }
}

export default Saved;
