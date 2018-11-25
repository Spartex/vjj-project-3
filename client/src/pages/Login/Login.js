import React, { Component } from "react";
import { LoginForm }  from "../../components/Auth"

// https://stackoverflow.com/questions/44009618/uncaught-typeerror-cannot-read-property-push-of-undefined-react-router-dom
// to use the props. history.push. it is part of the router package.  

class Login extends Component {
  state = {
    userName: "",
    passWord: ""
  }

  render() {
    return (
      <div className="container">
      <p>Login page!</p>
      <LoginForm {...this.props} />
      </div>
    )
  }
}

export default Login;
