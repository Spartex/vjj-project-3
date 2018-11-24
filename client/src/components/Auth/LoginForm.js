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
      state: { username: this.state.username }
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
          errorMessage: ""
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
        this.setState({
          errorMessage: msg
        })

      })
  }
  
  // https://medium.com/wdstack/bootstrap-4-form-examples-c18ac5e9cd30
  // bootstrap 4 register form,  
  render() {
    return (
      <div>


        <div className="card rounded-0">
          <div className="card-header">
            <h3 className="mb-0">Login</h3>
          </div>
          <div className="card-body">
            <form className="form" role="form" autoComplete="off" id="formLogin" noValidate="">
              <div className="form-group">
                <label htmlFor="uname1">Username</label>
                <input type="text" className="form-control form-control-lg rounded-0" placeholder = "Enter username" name="username" value={this.state.username} onChange={this.handleChange}  id="uname1" required="" />
                <div className="invalid-feedback">Oops, you missed this one.</div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" required="" autoComplete="new-password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                <div className="invalid-feedback">Enter your password too!</div>
              </div>
              <div>
                <label className="custom-control custom-checkbox">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description small text-dark">Remember me on this computer</span>
                </label>
              </div>
              <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin" onClick={this.handleSubmit}>Login</button>
            </form>
            <h4>{this.state.errorMessage}</h4>
            
          </div>
          
        </div>
        <div><h4><a href="/register">Register Here</a></h4></div>
      </div>
    )
  }
}


