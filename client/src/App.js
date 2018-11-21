import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Search from "./pages/Search"
import Result from "./pages/Result"
import Saved from "./pages/Saved"
import NoMatch from "./pages/NoMatch"
import Login from "./pages/Login"
import Register from "./pages/Register"

import "./App.css"


class App extends Component {

  render() {

    return (
      <Router>
        <div>
          
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
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
