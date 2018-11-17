import React, { Component } from "react";
import API from "../../utils/API";

class Search extends Component {
  state = {
    selectedIngred: [],
    ingredGroup: [],
    ingredAll: [],
  }

  getIngredients = () => {
    console.log("get Ingredients Groups to put into state")
    API.getIngredGroup()
      .then(res => {
        const ingredGroup = res.data
        this.setState({
          ingredGroup: ingredGroup
        }, () => { console.log("Hello!", this.state.ingredGroup) })
      })
    API.getIngredAll()
      .then(res => {
        console.log("All ingredients ", res.data)
      })
  }

  componentDidMount() {
    this.getIngredients()
  }

  render() {
    return (
      <div>
        <h1>I am on Search Page</h1>

        <div className="container">

          <div className="card">
            <div className="card-header">
              Pick Your Ingredient
            </div>
            <div className="card-body">
              <div className="card-group">
                {this.state.ingredGroup.map(group => {
                  return (
                    <div className="card img-fluid">
                      <img className="card-img-top" src={group.typeImgURL} alt={group.type.toUpperCase()} />
                      <div className="card-img-overlay">
                        <h4 className="card-text">{group.type.toUpperCase()}</h4>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>

          </div>


          <div className="card">
            <div className="card-header">
              Ingredient List Selected
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
