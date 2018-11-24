import React, { Component } from "react";
import API from "../../utils/API"
import "./LogRegForm.css"


export class RegisterForm extends Component {
  state = {
    username: "",
    password: "",
    password2: "",
    terms: false,
    disableSubmit: false,
    generalMessage: ''
  }

  // display the username and password on the screen
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // how to handle checkboxes source
  // https://codepen.io/dsabalete/pen/jAzLpA
  handleCheck = (event) => {
    this.setState({ terms: !this.state.terms });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit')
    let msg = ""

    // make sure passwords match and Terms of Services Agreed to  
    if ((this.state.password === this.state.password2) && this.state.terms) {
      console.log("good to go to register!")
      this.registerNewUser(this.state.username, this.state.password)
    } else {

      // generate error emssage if password did not match
      if (this.state.password !== this.state.password2) {
        msg += "Register Error: Passwords did not Match.  "
      }

      // append to error message if not agreed to terms of servie
      if (!this.state.terms) {
        msg += "You did not agree with the terms of service"
      }

      console.log(msg)
      this.setState({
        generalMessage: msg
      })
    }





  }


  registerNewUser = (username, password) => {
    let msg = ""
    API.registerNewUser(username, password)
      .then(res => {
        console.log("NO response?")
        console.log(res.data)
        let result = res.data
        let msg = ""
        let redirectURL = "/search"
        if ('error' in result) {
          msg = result['error']
        } else {
          this.setState({
            disableSubmit: true
          })
          msg = "Successful Registration!"
        }
        this.setState({
          generalMessage: msg,
        })
        // this.redirectTo(redirectURL)
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
          generalMessage: msg
        })

      })
  }

  // https://medium.com/wdstack/bootstrap-4-form-examples-c18ac5e9cd30
  // bootstrap 4 register form source,  
  render() {
    return (
      <div>
        <h1>Register component</h1>
        <div className="container-fluid bg-light py-3">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card card-body">
                <h3 className="text-center mb-4">Sign-up</h3>
                <fieldset>
                  <div className="form-group has-error">
                    <input className="form-control input-lg" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} type="text" />
                  </div>
                  <div className="form-group has-success">
                    <input className="form-control input-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} type="password" />
                  </div>
                  <div className="form-group has-success">
                    <input className="form-control input-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.handleChange} type="password" />
                  </div>
                  <div className="checkbox">
                    <label className="small">
                      <input name="terms" defaultChecked={this.state.terms} onChange={this.handleCheck} type="checkbox" />I have read and agree to the <a href="/terms.html" target="_blank">terms of service</a>
                    </label>
                  </div>
                  <input className="btn btn-lg btn-primary btn-block" disabled={this.state.disableSubmit} value="Sign Me Up" type="submit" onClick={this.handleSubmit} />
                </fieldset>
                <h4>{this.state.generalMessage}</h4>
                {this.state.disableSubmit && <a href="/login">click to Login</a> }
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

