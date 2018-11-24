import React, { Component } from "react";
import "./LogRegForm.css"


export class RegisterForm extends Component {
  state = {
    username: "",
    password: ""
  }

  // https://medium.com/wdstack/bootstrap-4-form-examples-c18ac5e9cd30
  // bootstrap 4 register form source     
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
                    <input className="form-control input-lg" placeholder="Username" name="email" type="text" />
                  </div>
                  <div className="form-group has-success">
                    <input className="form-control input-lg" placeholder="Password" name="password" value="" type="password" />
                  </div>
                  <div className="form-group has-success">
                    <input className="form-control input-lg" placeholder="Confirm Password" name="password" value="" type="password" />
                  </div>
                  <div className="checkbox">
                    <label className="small">
                      <input name="terms" type="checkbox" />I have read and agree to the <a href="#">terms of service</a>
                    </label>
                  </div>
                  <input className="btn btn-lg btn-primary btn-block" value="Sign Me Up" type="submit" />
                </fieldset>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

