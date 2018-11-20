import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Search from "./pages/Search"
import Result from "./pages/Result"
import Saved from "./pages/Saved"
import NoMatch from "./pages/NoMatch"
import NavBar from "./components/NavBar"
import "./App.css";


class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
