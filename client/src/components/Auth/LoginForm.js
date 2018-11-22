import React, { Component } from "react";
import API from "../../utils/API"
import "./LogRegForm.css"


export class LoginForm extends Component {


  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  // display the username and password on the screen
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit')
    this.loginUser(this.state.username, this.state.password)
  }

  redirectTo = (localPath) => {
    console.log("I am in Redirectin! ", localPath, this.state.username)
    this.props.history.push({
      pathname: '/search',
      state: { username: this.state.username}
    })
  }

  loginUser = (username, password) => {
    let msg = ""
    console.log("Did button login get clicked?")
    API.loginUser(username, password)
      .then(res => {
        console.log("NO response?")
        console.log(res.data)
        msg = res.data
        let redirectURL = this.props.sourceURL || "/search"
        this.setState({
          errorMessage:""
        })
        this.redirectTo(redirectURL)
      })
      .catch(err => {
        console.log("Did i made it to the error branch?")
        if (err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
          msg = err.response.data + " || " + err.response.status
        }
        this.setState ({
          errorMessage: msg
        })

      })
  } 

  render() {
    return (
        <form>
          <h1 onClick={this.loginUser}>Login Component</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">UserName</label>
            <input type="text" className="form-control" id="exampleInput" name="username" value={this.state.username} onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter Username" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit"  onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
          <hr></hr>
          <h4>{this.state.errorMessage}</h4>
        </form>

    )
  }
}



