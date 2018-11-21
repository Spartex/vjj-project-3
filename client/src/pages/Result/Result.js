import React, { Component } from "react";
import { RecipeListSect, RecipeBrief, RecipeDetModal } from "../../components/ResultsList"
import API from "../../utils/API"
import NavBar from "../../components/NavBar"

// the below recipeX and recipeTest are all for testing instead of waiting for the API
const recipe1 = {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 8,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "preparationMinutes": 45,
    "cookingMinutes": 180,
    "sourceUrl": "http://cantstayoutofthekitchen.com/2014/09/27/moms-apple-pie/",
    "spoonacularSourceUrl": "https://spoonacular.com/moms-apple-pie-615374",
    "aggregateLikes": 434,
    "spoonacularScore": 15,
    "healthScore": 1,
    "creditText": "Can't Stay out of the Kitchen",
    "sourceName": "Can't Stay out of the Kitchen",
    "pricePerServing": 71.33,
    "extendedIngredients": [
        {
            "id": 9003,
            "aisle": "Produce",
            "image": "apple.jpg",
            "consitency": "solid",
            "name": "apples",
            "original": "8 large apples, peeled, cored and sliced",
            "originalString": "8 large apples, peeled, cored and sliced",
            "originalName": null,
            "amount": 8,
            "unit": "",
            "meta": [
                "cored",
                "large",
                "peeled",
                "sliced"
            ],
            "metaInformation": [
                "cored",
                "large",
                "peeled",
                "sliced"
            ],
            "measures": {
                "us": {
                    "amount": 8,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 8,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 2010,
            "aisle": "Spices and Seasonings",
            "image": "cinnamon.jpg",
            "consitency": "solid",
            "name": "cinnamon",
            "original": "1 to 1 ½ tsp. cinnamon",
            "originalString": "1 to 1 ½ tsp. cinnamon",
            "originalName": null,
            "amount": 1,
            "unit": "tsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        },
        {
            "id": 19335,
            "aisle": "Baking",
            "image": "sugar-in-bowl.png",
            "consitency": "solid",
            "name": "sugar",
            "original": "1 cup sugar",
            "originalString": "1 cup sugar",
            "originalName": null,
            "amount": 1,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 10020081,
            "aisle": "Baking",
            "image": "flour.png",
            "consitency": "solid",
            "name": "unbleached flour",
            "original": "½ cup UNBLEACHED flour (bleached flour toughens baked goods)",
            "originalString": "½ cup UNBLEACHED flour (bleached flour toughens baked goods)",
            "originalName": null,
            "amount": 0.5,
            "unit": "cup",
            "meta": [
                "(bleached flour toughens baked goods)"
            ],
            "metaInformation": [
                "(bleached flour toughens baked goods)"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 1145,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consitency": "solid",
            "name": "unsalted butter",
            "original": "3 tbsp. unsalted butter",
            "originalString": "3 tbsp. unsalted butter",
            "originalName": null,
            "amount": 3,
            "unit": "tbsp",
            "meta": [
                "unsalted"
            ],
            "metaInformation": [
                "unsalted"
            ],
            "measures": {
                "us": {
                    "amount": 3,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 3,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        }
    ],
    "id": 615374,
    "title": "Mom's Apple Pie",
    "readyInMinutes": 225,
    "servings": 8,
    "image": "https://spoonacular.com/recipeImages/615374-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [
        "american"
    ],
    "dishTypes": [
        "dessert"
    ],
    "diets": [
        "lacto ovo vegetarian"
    ],
    "occasions": [],
    "winePairing": {
        "pairedWines": [
            "late harvest riesling",
            "moscato dasti",
            "prosecco"
        ],
        "pairingText": "Late Harvest Riesling, Moscato d'Asti, and Prosecco are my top picks for Apple Pie. These dessert wines have the right amount of sweetness and light, fruity flavors that won't overpower apple pie. You could try McFadden Late Harvest Riesling. Reviewers quite like it with a 5 out of 5 star rating and a price of about 18 dollars per bottle.",
        "productMatches": [
            {
                "id": 430244,
                "title": "McFadden Late Harvest Riesling",
                "description": "Late Harvest and Botrytis-blessed, like Château d'Yquem, this is a sublime experience. Honeyed apricot meets baked apple pie in a glass. Quite simply, this is the best dessert wine you will taste, even at double the price, in your lifetime.",
                "price": "$18.0",
                "imageUrl": "https://spoonacular.com/productImages/430244-312x231.jpg",
                "averageRating": 1,
                "ratingCount": 2,
                "score": 0.8571428571428572,
                "link": "https://www.amazon.com/McFadden-Harvest-Riesling-Mendocino-County/dp/B00NP97O6G?tag=spoonacular-20"
            }
        ]
    },
    "instructions": "Mix apple slices, sugar, cinnamon and flour.Set aside.Roll out bottom pie crust.Place in 9 deep dish pie plate.Cut up butter into small pieces and spread around into the bottom of the pie plate.Roll out top pie crust.Place apple mixture into pie plate.Place top crust carefully on top of the pie.Flute pie crust edges.Cut about six or eight slits in the top pie crust so steam can escape and filling can bubble up through the slits.Bake at 300 for 2 to 3 hours or until apple mixture bubbles up thickly through the slits in the crust.Cool.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Mix apple slices, sugar, cinnamon and flour.Set aside.",
                    "ingredients": [
                        {
                            "id": 2010,
                            "name": "cinnamon",
                            "image": "cinnamon.jpg"
                        },
                        {
                            "id": 9003,
                            "name": "apple",
                            "image": "apple.jpg"
                        },
                        {
                            "id": 19335,
                            "name": "sugar",
                            "image": "sugar-in-bowl.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 2,
                    "step": "Roll out bottom pie crust.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 3,
                    "step": "Place in 9 deep dish pie plate.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 4,
                    "step": "Cut up butter into small pieces and spread around into the bottom of the pie plate.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 5,
                    "step": "Roll out top pie crust.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 6,
                    "step": "Place apple mixture into pie plate.",
                    "ingredients": [
                        {
                            "id": 9003,
                            "name": "apple",
                            "image": "apple.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 7,
                    "step": "Place top crust carefully on top of the pie.Flute pie crust edges.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 8,
                    "step": "Cut about six or eight slits in the top pie crust so steam can escape and filling can bubble up through the slits.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 9,
                    "step": "Bake at 300 for 2 to 3 hours or until apple mixture bubbles up thickly through the slits in the crust.Cool.",
                    "ingredients": [
                        {
                            "id": 9003,
                            "name": "apple",
                            "image": "apple.jpg"
                        }
                    ],
                    "equipment": []
                }
            ]
        }
    ],
    "creditsText": "Can't Stay out of the Kitchen"
}
const recipe2 =
{
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 10,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "sourceUrl": "http://eatathomecooks.com/2009/07/crockpot-honey-mustard-chicken.html",
    "spoonacularSourceUrl": "https://spoonacular.com/crockpot-honey-mustard-chicken-504291",
    "aggregateLikes": 10682,
    "spoonacularScore": 50,
    "healthScore": 3,
    "creditText": "Eat at Home Cooks",
    "sourceName": "Eat at Home Cooks",
    "pricePerServing": 105.77,
    "extendedIngredients": [
        {
            "id": 1002046,
            "aisle": "Condiments",
            "image": "dijon-mustard.jpg",
            "consitency": "liquid",
            "name": "dijon mustard",
            "original": "1/4 cup dijon mustard",
            "originalString": "1/4 cup dijon mustard",
            "originalName": null,
            "amount": 0.25,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 59.147,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 19296,
            "aisle": "Nut butters, Jams, and Honey",
            "image": "honey.jpg",
            "consitency": "liquid",
            "name": "honey",
            "original": "1/2 cup honey",
            "originalString": "1/2 cup honey",
            "originalName": null,
            "amount": 0.5,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 1102047,
            "aisle": "Spices and Seasonings",
            "image": "salt-and-pepper.jpg",
            "consitency": "solid",
            "name": "salt and pepper",
            "original": "salt and pepper to taste",
            "originalString": "salt and pepper to taste",
            "originalName": null,
            "amount": 8,
            "unit": "servings",
            "meta": [
                "to taste"
            ],
            "metaInformation": [
                "to taste"
            ],
            "measures": {
                "us": {
                    "amount": 8,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 8,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        },
        {
            "id": 5006,
            "aisle": "Meat",
            "image": "whole-chicken.jpg",
            "consitency": "liquid",
            "name": "whole chicken",
            "original": "whole chicken, cut up (or the equivalent in chicken pieces)",
            "originalString": "whole chicken, cut up (or the equivalent in chicken pieces)",
            "originalName": null,
            "amount": 8,
            "unit": "servings",
            "meta": [
                "whole",
                "(or the equivalent in chicken pieces)"
            ],
            "metaInformation": [
                "whole",
                "(or the equivalent in chicken pieces)"
            ],
            "measures": {
                "us": {
                    "amount": 8,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 8,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        }
    ],
    "id": 504291,
    "title": "Crockpot Honey Mustard Chicken",
    "readyInMinutes": 45,
    "servings": 8,
    "image": "https://spoonacular.com/recipeImages/504291-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [],
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [
        "gluten free",
        "dairy free",
        "paleolithic",
        "primal"
    ],
    "occasions": [],
    "winePairing": {},
    "instructions": "Mix the honey, mustard, salt and pepper together in a small bowl.  Put the chicken in the crockpot and pour the mixture over the top.  Cook on high for 6-8 hours.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Mix the honey, mustard, salt and pepper together in a small bowl.",
                    "ingredients": [
                        {
                            "id": 1102047,
                            "name": "salt and pepper",
                            "image": "salt-and-pepper.jpg"
                        },
                        {
                            "id": 2046,
                            "name": "mustard",
                            "image": "regular-mustard.jpg"
                        },
                        {
                            "id": 19296,
                            "name": "honey",
                            "image": "honey.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404783,
                            "name": "bowl",
                            "image": "bowl.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Put the chicken in the crockpot and pour the mixture over the top.  Cook on high for 6-8 hours.",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404718,
                            "name": "slow cooker",
                            "image": "slow-cooker.jpg"
                        }
                    ]
                }
            ]
        }
    ],
    "creditsText": "Eat at Home Cooks"
}
let recipeTest = []
recipeTest.push(recipe1)
recipeTest.push(recipe2)


class Result extends Component {

    state = {
        recipeList: [],
        modalIsOpen: {},
    }

    componentDidMount() {
        console.log(this.props)
        // initialize all Modals To be Closed
        let modalIsOpen = this.state.modalIsOpen
        this.props.location.state.recipeList.map(
            recipe => { modalIsOpen[recipe.id] = false }
        )
        this.setState({modalIsOpen})
    }

    openModal = (recipeID) => {
        let modalIsOpenCopy = this.state.modalIsOpen
        modalIsOpenCopy[recipeID] = true
        console.log("Open modal for: ", recipeID)
        this.setState({
            modalIsOpen: modalIsOpenCopy
        })
    }


    closeModal = (recipeID) => {
        let modalIsOpenCopy = this.state.modalIsOpen
        modalIsOpenCopy[recipeID] = false
        console.log("Close modal for: ", recipeID)
        this.setState({
            modalIsOpen: modalIsOpenCopy
        })
    }

    getRecipeDetails = (recipeID) => {
        console.log("getting Details: ", recipeID)
        this.openModal(recipeID)
        /*
        API.getRecipeDetails(recipeID)
          .then(res => res.data)
        */
        // open modal with propreties 
        // dispaly 
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <RecipeListSect>
                        {this.props.location.state.recipeList.map(recipe => {
                            return (
                                <div key={recipe.id}>
                                <RecipeBrief
                                    title={recipe.title}
                                    image={recipe.image}
                                    id={recipe.id}
                                    likes={recipe.likes}
                                    openModal={() => this.openModal(recipe.id)}
                                />
                                <RecipeDetModal
                                    title={recipe.title}
                                    image={recipe.image}
                                    id={recipe.id}
                                    modalIsOpen = {this.state.modalIsOpen[recipe.id]}
                                    closeModal = {() => this.closeModal(recipe.id)}
                                />
                                </div>
                            )
                        })}
                    </RecipeListSect>
                </div>
            </div>

        )
    }
}

export default Result;


/*
   recipeList: [
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
      },
      {
        "id": 534573,
        "title": "Brown Butter Apple Crumble",
        "image": "https://spoonacular.com/recipeImages/534573-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 7
      },
      {
        "id": 70306,
        "title": "Easy Cinnamon Apple Pie",
        "image": "https://spoonacular.com/recipeImages/70306-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 5
      },
      {
        "id": 48416,
        "title": "French Apple Tart",
        "image": "https://spoonacular.com/recipeImages/48416-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 1
      },
      {
        "id": 47732,
        "title": "Apple Tart",
        "image": "https://spoonacular.com/recipeImages/47732-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 0
      },
      {
        "id": 47891,
        "title": "Apple Tart",
        "image": "https://spoonacular.com/recipeImages/47891-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 0
      },
      {
        "id": 55263,
        "title": "Apple-Cranberry Crisp",
        "image": "https://spoonacular.com/recipeImages/55263-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 0
      },
      {
        "id": 383897,
        "title": "Polish Apple Pancakes",
        "image": "https://spoonacular.com/recipeImages/383897-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 0
      },
      {
        "id": 417484,
        "title": "Nutmeg Sauced Apples",
        "image": "https://spoonacular.com/recipeImages/417484-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 0
      },
      {
        "id": 427175,
        "title": "Glazed Apple and Sausage with Pancakes",
        "image": "https://spoonacular.com/recipeImages/427175-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 0
      },
      {
        "id": 433330,
        "title": "Our Favorite Pork Chops",
        "image": "https://spoonacular.com/recipeImages/433330-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 0,
        "likes": 0
      }
    ]


search list for chicken
[
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
    }
]


//  recipe info for ID: 615374   title:  Mom's Apple Pie


{
    "vegetarian": true,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 8,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "preparationMinutes": 45,
    "cookingMinutes": 180,
    "sourceUrl": "http://cantstayoutofthekitchen.com/2014/09/27/moms-apple-pie/",
    "spoonacularSourceUrl": "https://spoonacular.com/moms-apple-pie-615374",
    "aggregateLikes": 434,
    "spoonacularScore": 15,
    "healthScore": 1,
    "creditText": "Can't Stay out of the Kitchen",
    "sourceName": "Can't Stay out of the Kitchen",
    "pricePerServing": 71.33,
    "extendedIngredients": [
        {
            "id": 9003,
            "aisle": "Produce",
            "image": "apple.jpg",
            "consitency": "solid",
            "name": "apples",
            "original": "8 large apples, peeled, cored and sliced",
            "originalString": "8 large apples, peeled, cored and sliced",
            "originalName": null,
            "amount": 8,
            "unit": "",
            "meta": [
                "cored",
                "large",
                "peeled",
                "sliced"
            ],
            "metaInformation": [
                "cored",
                "large",
                "peeled",
                "sliced"
            ],
            "measures": {
                "us": {
                    "amount": 8,
                    "unitShort": "",
                    "unitLong": ""
                },
                "metric": {
                    "amount": 8,
                    "unitShort": "",
                    "unitLong": ""
                }
            }
        },
        {
            "id": 2010,
            "aisle": "Spices and Seasonings",
            "image": "cinnamon.jpg",
            "consitency": "solid",
            "name": "cinnamon",
            "original": "1 to 1 ½ tsp. cinnamon",
            "originalString": "1 to 1 ½ tsp. cinnamon",
            "originalName": null,
            "amount": 1,
            "unit": "tsp",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                },
                "metric": {
                    "amount": 1,
                    "unitShort": "tsp",
                    "unitLong": "teaspoon"
                }
            }
        },
        {
            "id": 19335,
            "aisle": "Baking",
            "image": "sugar-in-bowl.png",
            "consitency": "solid",
            "name": "sugar",
            "original": "1 cup sugar",
            "originalString": "1 cup sugar",
            "originalName": null,
            "amount": 1,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 1,
                    "unitShort": "cup",
                    "unitLong": "cup"
                },
                "metric": {
                    "amount": 236.588,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 10020081,
            "aisle": "Baking",
            "image": "flour.png",
            "consitency": "solid",
            "name": "unbleached flour",
            "original": "½ cup UNBLEACHED flour (bleached flour toughens baked goods)",
            "originalString": "½ cup UNBLEACHED flour (bleached flour toughens baked goods)",
            "originalName": null,
            "amount": 0.5,
            "unit": "cup",
            "meta": [
                "(bleached flour toughens baked goods)"
            ],
            "metaInformation": [
                "(bleached flour toughens baked goods)"
            ],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 1145,
            "aisle": "Milk, Eggs, Other Dairy",
            "image": "butter-sliced.jpg",
            "consitency": "solid",
            "name": "unsalted butter",
            "original": "3 tbsp. unsalted butter",
            "originalString": "3 tbsp. unsalted butter",
            "originalName": null,
            "amount": 3,
            "unit": "tbsp",
            "meta": [
                "unsalted"
            ],
            "metaInformation": [
                "unsalted"
            ],
            "measures": {
                "us": {
                    "amount": 3,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                },
                "metric": {
                    "amount": 3,
                    "unitShort": "Tbsps",
                    "unitLong": "Tbsps"
                }
            }
        }
    ],
    "id": 615374,
    "title": "Mom's Apple Pie",
    "readyInMinutes": 225,
    "servings": 8,
    "image": "https://spoonacular.com/recipeImages/615374-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [
        "american"
    ],
    "dishTypes": [
        "dessert"
    ],
    "diets": [
        "lacto ovo vegetarian"
    ],
    "occasions": [],
    "winePairing": {
        "pairedWines": [
            "late harvest riesling",
            "moscato dasti",
            "prosecco"
        ],
        "pairingText": "Late Harvest Riesling, Moscato d'Asti, and Prosecco are my top picks for Apple Pie. These dessert wines have the right amount of sweetness and light, fruity flavors that won't overpower apple pie. You could try McFadden Late Harvest Riesling. Reviewers quite like it with a 5 out of 5 star rating and a price of about 18 dollars per bottle.",
        "productMatches": [
            {
                "id": 430244,
                "title": "McFadden Late Harvest Riesling",
                "description": "Late Harvest and Botrytis-blessed, like Château d'Yquem, this is a sublime experience. Honeyed apricot meets baked apple pie in a glass. Quite simply, this is the best dessert wine you will taste, even at double the price, in your lifetime.",
                "price": "$18.0",
                "imageUrl": "https://spoonacular.com/productImages/430244-312x231.jpg",
                "averageRating": 1,
                "ratingCount": 2,
                "score": 0.8571428571428572,
                "link": "https://www.amazon.com/McFadden-Harvest-Riesling-Mendocino-County/dp/B00NP97O6G?tag=spoonacular-20"
            }
        ]
    },
    "instructions": "Mix apple slices, sugar, cinnamon and flour.Set aside.Roll out bottom pie crust.Place in 9 deep dish pie plate.Cut up butter into small pieces and spread around into the bottom of the pie plate.Roll out top pie crust.Place apple mixture into pie plate.Place top crust carefully on top of the pie.Flute pie crust edges.Cut about six or eight slits in the top pie crust so steam can escape and filling can bubble up through the slits.Bake at 300 for 2 to 3 hours or until apple mixture bubbles up thickly through the slits in the crust.Cool.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Mix apple slices, sugar, cinnamon and flour.Set aside.",
                    "ingredients": [
                        {
                            "id": 2010,
                            "name": "cinnamon",
                            "image": "cinnamon.jpg"
                        },
                        {
                            "id": 9003,
                            "name": "apple",
                            "image": "apple.jpg"
                        },
                        {
                            "id": 19335,
                            "name": "sugar",
                            "image": "sugar-in-bowl.png"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 2,
                    "step": "Roll out bottom pie crust.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 3,
                    "step": "Place in 9 deep dish pie plate.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 4,
                    "step": "Cut up butter into small pieces and spread around into the bottom of the pie plate.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 5,
                    "step": "Roll out top pie crust.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 6,
                    "step": "Place apple mixture into pie plate.",
                    "ingredients": [
                        {
                            "id": 9003,
                            "name": "apple",
                            "image": "apple.jpg"
                        }
                    ],
                    "equipment": []
                },
                {
                    "number": 7,
                    "step": "Place top crust carefully on top of the pie.Flute pie crust edges.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 8,
                    "step": "Cut about six or eight slits in the top pie crust so steam can escape and filling can bubble up through the slits.",
                    "ingredients": [],
                    "equipment": []
                },
                {
                    "number": 9,
                    "step": "Bake at 300 for 2 to 3 hours or until apple mixture bubbles up thickly through the slits in the crust.Cool.",
                    "ingredients": [
                        {
                            "id": 9003,
                            "name": "apple",
                            "image": "apple.jpg"
                        }
                    ],
                    "equipment": []
                }
            ]
        }
    ],
    "creditsText": "Can't Stay out of the Kitchen"
}



   "id": 504291,
    "title": "Crockpot Honey Mustard Chicken",
 

{
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 10,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "sourceUrl": "http://eatathomecooks.com/2009/07/crockpot-honey-mustard-chicken.html",
    "spoonacularSourceUrl": "https://spoonacular.com/crockpot-honey-mustard-chicken-504291",
    "aggregateLikes": 10682,
    "spoonacularScore": 50,
    "healthScore": 3,
    "creditText": "Eat at Home Cooks",
    "sourceName": "Eat at Home Cooks",
    "pricePerServing": 105.77,
    "extendedIngredients": [
        {
            "id": 1002046,
            "aisle": "Condiments",
            "image": "dijon-mustard.jpg",
            "consitency": "liquid",
            "name": "dijon mustard",
            "original": "1/4 cup dijon mustard",
            "originalString": "1/4 cup dijon mustard",
            "originalName": null,
            "amount": 0.25,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 0.25,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 59.147,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 19296,
            "aisle": "Nut butters, Jams, and Honey",
            "image": "honey.jpg",
            "consitency": "liquid",
            "name": "honey",
            "original": "1/2 cup honey",
            "originalString": "1/2 cup honey",
            "originalName": null,
            "amount": 0.5,
            "unit": "cup",
            "meta": [],
            "metaInformation": [],
            "measures": {
                "us": {
                    "amount": 0.5,
                    "unitShort": "cups",
                    "unitLong": "cups"
                },
                "metric": {
                    "amount": 118.294,
                    "unitShort": "g",
                    "unitLong": "grams"
                }
            }
        },
        {
            "id": 1102047,
            "aisle": "Spices and Seasonings",
            "image": "salt-and-pepper.jpg",
            "consitency": "solid",
            "name": "salt and pepper",
            "original": "salt and pepper to taste",
            "originalString": "salt and pepper to taste",
            "originalName": null,
            "amount": 8,
            "unit": "servings",
            "meta": [
                "to taste"
            ],
            "metaInformation": [
                "to taste"
            ],
            "measures": {
                "us": {
                    "amount": 8,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 8,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        },
        {
            "id": 5006,
            "aisle": "Meat",
            "image": "whole-chicken.jpg",
            "consitency": "liquid",
            "name": "whole chicken",
            "original": "whole chicken, cut up (or the equivalent in chicken pieces)",
            "originalString": "whole chicken, cut up (or the equivalent in chicken pieces)",
            "originalName": null,
            "amount": 8,
            "unit": "servings",
            "meta": [
                "whole",
                "(or the equivalent in chicken pieces)"
            ],
            "metaInformation": [
                "whole",
                "(or the equivalent in chicken pieces)"
            ],
            "measures": {
                "us": {
                    "amount": 8,
                    "unitShort": "servings",
                    "unitLong": "servings"
                },
                "metric": {
                    "amount": 8,
                    "unitShort": "servings",
                    "unitLong": "servings"
                }
            }
        }
    ],
    "id": 504291,
    "title": "Crockpot Honey Mustard Chicken",
    "readyInMinutes": 45,
    "servings": 8,
    "image": "https://spoonacular.com/recipeImages/504291-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [],
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "diets": [
        "gluten free",
        "dairy free",
        "paleolithic",
        "primal"
    ],
    "occasions": [],
    "winePairing": {},
    "instructions": "Mix the honey, mustard, salt and pepper together in a small bowl.  Put the chicken in the crockpot and pour the mixture over the top.  Cook on high for 6-8 hours.",
    "analyzedInstructions": [
        {
            "name": "",
            "steps": [
                {
                    "number": 1,
                    "step": "Mix the honey, mustard, salt and pepper together in a small bowl.",
                    "ingredients": [
                        {
                            "id": 1102047,
                            "name": "salt and pepper",
                            "image": "salt-and-pepper.jpg"
                        },
                        {
                            "id": 2046,
                            "name": "mustard",
                            "image": "regular-mustard.jpg"
                        },
                        {
                            "id": 19296,
                            "name": "honey",
                            "image": "honey.jpg"
                        }
                    ],
                    "equipment": [
                        {
                            "id": 404783,
                            "name": "bowl",
                            "image": "bowl.jpg"
                        }
                    ]
                },
                {
                    "number": 2,
                    "step": "Put the chicken in the crockpot and pour the mixture over the top.  Cook on high for 6-8 hours.",
                    "ingredients": [],
                    "equipment": [
                        {
                            "id": 404718,
                            "name": "slow cooker",
                            "image": "slow-cooker.jpg"
                        }
                    ]
                }
            ]
        }
    ],
    "creditsText": "Eat at Home Cooks"
}

*/
