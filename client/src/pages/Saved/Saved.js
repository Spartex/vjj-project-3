import React, { Component } from "react";
import NavBar from "../../components/NavBar"
import API from "../../utils/API"

class Saved extends Component {
  state = {
    username: "",
    loggedIn: false
  }

  componentDidMount() {
    API.checkForUser()
      .then(res => {
        console.log(res.data)
        if (!res.data['user']) {
          console.log("No user found!")
          this.props.history.push({
            pathname: '/login'
          })
        } else {
          this.setState({
            loggedIn: true,
            username: res.data['user']['username']
          })

        }
      })
  }

  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <h1>I am on Saved Page with {this.state.username}</h1>
      </div>
    
    )
  }
}

export default Saved;
