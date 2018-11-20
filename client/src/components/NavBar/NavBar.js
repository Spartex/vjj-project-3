import React, { Component } from "react"
import { Link } from 'react-router-dom'
import "./Navbar.css"

class NavBar extends Component {

  // https://www.davebennett.tech/bootstrap-navbar-collapse-reactjs/
  state = {
    collapsed: true
  }

  toggleNavBar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }


  render() {
    const collapsed = this.state.collapsed
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';


    return (
      <nav className="rwnav navbar navbar-expand-sm bg-light navbar-light">
        <a className="navbar-brand" href="/">Recipe Warrior</a>
        <button onClick={this.toggleNavBar} className={classTwo} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classOne} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">Saved</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );

  }

}

export default NavBar;