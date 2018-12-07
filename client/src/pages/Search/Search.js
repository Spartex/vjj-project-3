import React, { Component } from "react"
import API from "../../utils/API"
import { IngredGroupSect, IngredGroupCard, IngredCard, IngredModal } from "../../components/Group"
import { IngredSelectedSect, IngredAdd, GetRecipeListBtn } from "../../components/Selection"
import NavBar from "../../components/NavBar"

// below testRecipes and testRecipelist is placeholder in lieu of actual API calls
let testRecipes = []
let testRecipeList = [
  {
    "id": 618390,
    "title": "Quick Apple Pies",
    "image": "https://spoonacular.com/recipeImages/618390-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 1005
  },
  {
    "id": 615374,
    "title": "Mom's Apple Pie",
    "image": "https://spoonacular.com/recipeImages/615374-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 434
  },
  {
    "id": 556470,
    "title": "Apple fritters",
    "image": "https://spoonacular.com/recipeImages/556470-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 243
  },
  {
    "id": 611026,
    "title": "Apple Crisp III",
    "image": "https://spoonacular.com/recipeImages/611026-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 138
  },
  {
    "id": 599133,
    "title": "Upside-Down Caramelized Apple Tart",
    "image": "https://spoonacular.com/recipeImages/599133-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 57
  },
  {
    "id": 73474,
    "title": "Apple Turnovers",
    "image": "https://spoonacular.com/recipeImages/73474-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 48
  },
  {
    "id": 47950,
    "title": "Cinnamon Apple Crisp",
    "image": "https://spoonacular.com/recipeImages/47950-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 35
  },
  {
    "id": 601227,
    "title": "Classic Apple Crisp",
    "image": "https://spoonacular.com/recipeImages/601227-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 27
  },
  {
    "id": 597993,
    "title": "Rustic Apple Tarts",
    "image": "https://spoonacular.com/recipeImages/597993-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 19
  },
  {
    "id": 628564,
    "title": "Nasoya Apple Hand Pies with a Cinnamon and Sugar Crunch",
    "image": "https://spoonacular.com/recipeImages/628564-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 0,
    "likes": 11
  }
]
let testRecipeList2 = [
  {
    "id": 504291,
    "title": "Crockpot Honey Mustard Chicken",
    "image": "https://spoonacular.com/recipeImages/504291-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 10682
  },
  {
    "id": 309856,
    "title": "Beer Can Chicken",
    "image": "https://spoonacular.com/recipeImages/309856-312x231.jpeg",
    "imageType": "jpeg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 97
  },
  {
    "id": 992053,
    "title": "Chinese Smoked Chicken (Instant Pot)",
    "image": "https://spoonacular.com/recipeImages/992053-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 20
  },
  {
    "id": 983395,
    "title": "Beer Can Chicken",
    "image": "https://spoonacular.com/recipeImages/983395-312x231.jpeg",
    "imageType": "jpeg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 10
  },
  {
    "id": 287151,
    "title": "Apple Cider Brined Chicken",
    "image": "https://spoonacular.com/recipeImages/287151-312x231.jpeg",
    "imageType": "jpeg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 4
  },
  {
    "id": 148354,
    "title": "Roasted Lime and Onion Chicken",
    "image": "https://spoonacular.com/recipeImages/148354-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 1
  },
  {
    "id": 30794,
    "title": "Smoky Roasted Cauliflower",
    "image": "https://spoonacular.com/recipeImages/30794-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 0
  },
  {
    "id": 282731,
    "title": "How to Roast a Chicken",
    "image": "https://spoonacular.com/recipeImages/282731-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 0
  },
  {
    "id": 186905,
    "title": "Rich Turkey Gravy",
    "image": "https://spoonacular.com/recipeImages/186905-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 0
  },
  {
    "id": 543314,
    "title": "Chicken in a Crock Pot",
    "image": "https://spoonacular.com/recipeImages/543314-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 1,
    "missedIngredientCount": 2,
    "likes": 0
  }
]

testRecipes.push(testRecipeList)
testRecipes.push(testRecipeList2)


class Search extends Component {

  state = {
    addIngred: ['chicken', 'tomato', 'banana'],
    ingredGroup: [],
    ingredAll: {},
    modalIsOpen: {},
    recipeList: [],
    searching: false,
    loggedIn: false,
    username: ""
  }

  componentDidMount() {
    // this is called to populate the state variables: ingredAll
    // and ingredGroup (list of types like meat, vegetable)
    this.getIngredients()

    // check for Logged in User
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

    // grab recipe list 
    let ingredList = this.state.addIngred
    console.log(ingredList)

    // update searching variable to "true"
    // this will disable the search button 
    // and change the button text from "search" to "searching"
    this.setState({
      searching: true
    })

    // this simulates the search for testing purposes 
/*    console.log("Simulating Search Results from Pre-defined List") 
    let randomIndex = Math.floor(Math.random() * testRecipes.length)
    setTimeout(() => {
      this.props.history.push({
        pathname: '/result',
        state: { recipeList: testRecipes[randomIndex] },
      })
    }, 1000) */
    


    // this is the real API search below
  console.log("real search results")
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
    
  }


  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <div className="container">

          <IngredGroupSect prompt={this.state.username + ", Pick Your Ingredients!"}>
            {this.state.ingredGroup.map(group => {
              return (
                <IngredGroupCard
                  key={group.type}
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
                deleteMe={() => this.delIngredFromList(item)}
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
                      key={ingred['name']}
                      ingredName={ingred['name']}
                      addToList={() => this.addIngredToList(ingred['name'], ingred['type'])}
                      ingredImgURL={ingred['nameImgURL']}
                    />
                  )
                })}
              </IngredModal>
            )
          })}


          <GetRecipeListBtn searching={this.state.searching} action={this.getRecipeList}>Search For Recipes</GetRecipeListBtn>
        </div>

      </div>
    )
  }
}

export default Search;
