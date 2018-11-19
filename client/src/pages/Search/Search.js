import React, { Component } from "react"
import API from "../../utils/API"
import { IngredGroupSect, IngredGroupCard, IngredCard, IngredModal } from "../../components/Group"
import { IngredSelectedSect, IngredAdd, GetRecipeListBtn } from "../../components/Selection"

class Search extends Component {

  state = {
    addIngred: ['chicken', 'tomato', 'banana'],
    ingredGroup: [],
    ingredAll: {},
    modalIsOpen: {},
    recipeList: []
  }

  componentDidMount() {
    // this is called to populate the state variables: ingredAll
    // and ingredGroup (list of types like meat, vegetable)
    this.getIngredients()
  }

  getIngredients = () => {
    console.log("get Ingredients Groups to put into state")
    // this first API call gets a list of the ingredient groups
    // eg.  meat, seafood, dairy, vegetables
    API.getIngredGroup()
      .then(res => {
        const ingredGroup = res.data
        this.setState({
          ingredGroup: ingredGroup
        }, () => {
          console.log("These are the ingredient group acquired", this.state.ingredGroup)
          // the second API call gest all the ingredients 
          API.getIngredAll()
            .then(res => {
              let allIngredList = res.data
              let groupList = this.state.ingredGroup
              let modalTriggers = {}
              // console.log("All ingredients ", allIngredList)
              let ingredObj = {} // store ingredient per category, this is for the modals
              for (let i = 0; i < groupList.length; i++) {
                //set the modalIsOpen keys to false
                modalTriggers[groupList[i]['type']] = false
                // console.log(groupList[i]['type'], ":::", modalTriggers)
                let filteredList = allIngredList.filter(ingred => ingred.type === groupList[i]['type'])
                ingredObj[groupList[i]['type']] = filteredList
              }
              console.log("This is my dictionary group acquired!")
              console.log(ingredObj)
              this.setState({
                ingredAll: ingredObj,
                modalIsOpen: modalTriggers
              })
            })

        })
      })
  }



  openModal = (type) => {
    let modalIsOpenCopy = this.state.modalIsOpen
    modalIsOpenCopy[type] = true
    console.log("Open modal for: ", type)
    this.setState({
      modalIsOpen: modalIsOpenCopy
    })
  }


  closeModal = (type) => {
    let modalIsOpenCopy = this.state.modalIsOpen
    modalIsOpenCopy[type] = false
    console.log("Close modal for: ", type)
    this.setState({
      modalIsOpen: modalIsOpenCopy
    })
  }


  addIngredToList = (ingred, type) => {
    let addIngred = this.state.addIngred
    if (addIngred.indexOf(ingred) < 0) {
      addIngred.push(ingred)
    }
    this.closeModal(type)
    this.setState({
      addIngred
    })
  }

  delIngredFromList = (ingred) => {
    let addIngred = this.state.addIngred
    let updateList = addIngred.filter(item => item !== ingred)
    this.setState({
      addIngred: updateList
    })
  }


  getRecipeList = () => {
    let ingredList = this.state.addIngred
    console.log(ingredList)
    // placeholder below forwarding
    this.props.history.push({
      pathname: '/result',
    })
    /*
    API.getRecipeList(ingredList)
      .then(res => {
        console.log("----->")
        console.log(res)
        console.log("------RECIPE LIST-----")
        console.log(res.data)
        this.setState({
          recipeList: res.data
        }, () => {
          this.props.history.push({
            pathname: '/result',
            state: {recipeList: res.data}
          })
        } )
      })
    */
  }

  render() {
    return (
      <div>
        <div className="container">

          <IngredGroupSect>
            {this.state.ingredGroup.map(group => {
              return (
                <IngredGroupCard
                  key = {group.type}
                  type={group.type}
                  modalOpen={() => this.openModal(group.type)}
                  typeImgURL={group.typeImgURL}
                />
              )
            })}
          </IngredGroupSect>

          <IngredSelectedSect>
            {this.state.addIngred.map(item => (
              <IngredAdd
                key={item}
                deleteMe = {() => this.delIngredFromList(item)}
              >{item}</IngredAdd>
            ))}
          </IngredSelectedSect>


          {Object.entries(this.state.ingredAll).map(([type, ingredList]) => {
            return (
              <IngredModal
                key={type}
                modalIsOpen={this.state.modalIsOpen[type]}
                closeModal={() => this.closeModal(type)}
                type={type}
              >
                {ingredList.map((ingred, index) => {
                  return (
                    <IngredCard
                      key = {ingred['name']}
                      ingredName={ingred['name']}
                      addToList={() => this.addIngredToList(ingred['name'], ingred['type'])}
                      ingredImgURL={ingred['nameImgURL']}
                    />
                  )
                })}
              </IngredModal>
            )
          })}

            
           <GetRecipeListBtn action={this.getRecipeList}>Search for Recipes</GetRecipeListBtn>
        </div>

      </div>
    )
  }
}

export default Search;
