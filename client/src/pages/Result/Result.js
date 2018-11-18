import React, { Component } from "react";


class Result extends Component {
  
  state = {
    recipeList: []
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (<h1>I am on Result Page</h1>)
  }
}

export default Result;
