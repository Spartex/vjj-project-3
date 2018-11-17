import React, { Component } from "react";


class NoMatch extends Component {
  state = {
    books: [],
    loading: false
  }

  render() {
    return (<h1>I am on No Match Page</h1>)
  }
}

export default NoMatch;
