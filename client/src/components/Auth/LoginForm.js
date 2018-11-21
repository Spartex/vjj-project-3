import React, { Component } from "react";
import API from "../../utils/API"
import "./LogRegForm.css"


export class LoginForm extends Component {

  loginUser = (username, password) => {
    console.log("Did button login get clicked?")
    API.loginUser("vwong","n1thing")
      .then(res => {
        console.log("NO response?")
        console.log(res.data)
      })
  } 

  render() {
    return (
        <form>
          <h1 onClick={this.loginUser}>Login Component</h1>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit"  className="btn btn-primary">Submit</button>
        </form>

    )
  }
}



