import React, { Component } from "react";
import { RegisterForm }  from "../../components/Auth"


class Register extends Component {
  state = {
    userName: "",
    passWord: ""
  }

  render() {
    return (
      <div className="container">
      <RegisterForm />
      </div>
    )
  }
}

export default Register
