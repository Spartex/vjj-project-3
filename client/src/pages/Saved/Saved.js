import React, { Component } from "react";
import NavBar from "../../components/NavBar"
import API from "../../utils/API"

class Saved extends Component {
  state = {
    username: "",
    loggedIn: false,
    savedRecipes: []
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
          API.getFavOfUser(res.data['user']['username'])
            .then(res => { 
              console.log("Favorites List:", res.data['savedRecipes'])
              this.setState({
                savedRecipes: res.data['savedRecipes']
              })
            })
        }
      })
  }



  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <h4>I am on Saved Page with {this.state.username}</h4>
        <ul>
          {this.state.savedRecipes.map( recipe => {
            return <li key={recipe}>{recipe}</li>
          })}
        </ul>
      </div>
    
    )
  }
}

export default Saved;
