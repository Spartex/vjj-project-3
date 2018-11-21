import React, { Component } from "react";
import { LoginForm }  from "../../components/Auth"


class Login extends Component {
  state = {
    userName: "",
    passWord: ""
  }

  render() {
    return (
      <div className="container">
      <p>Login page!</p>
      <LoginForm />
      </div>
    )
  }
}

export default Login;
