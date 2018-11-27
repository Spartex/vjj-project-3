## steps to start the Recipe App
1.  Startup MongoDB 
     * mongod

1.  cd into the directory where the cloned repository is
     * cd ./vjj-project-3

1.  install dependencies
     * yarn install

1.  cd into the directory to seed the files for the ingredients
     * cd ./vjj-project-3/scripts

1.  run the seed file to put in all the ingredients for the display.. Please update this file with better ingredients as needed
     * node seedDB.js   

1.  create ".env" file in the ./vjj-project-3  directory.  And copy the contents of the API keys in there (see slack)

1.  start the files 
    * yarn start


## steps to use the placeholder simulated API
1.  Modify the ./client/src/pages/Search/Search.js
    * make sure the 8 lines below the text "//this simulates the search for testing purposes" IS NOT commented out.  (lines 331-338) 
    * make sure the 16 lines below the text "//this is the real API search below" IS commented out.  (lines 343-358)   

1.  Modify the ./client/src/components/ResultsList/RecipeDetModal.js
    * make sure the 26 lines below the text "//this simulates the search for testing purposes" IS NOT commented out.  (lines 543-569) 
    * make sure the 16 lines below the text "//this is the real API search below" IS commented out.  (lines 573-598) 


## steps to use the real API
1.  Modify the ./client/src/pages/Search/Search.js
    * make sure the 8 lines below the text "//this simulates the search for testing purposes" IS commented out.  (lines 331-338) 
    * make sure the 16 lines below the text "//this is the real API search below" IS NOT commented out.  (lines 343-358)   

1.  Modify the ./client/src/components/ResultsList/RecipeDetModal.js
    * make sure the 26 lines below the text "//this simulates the search for testing purposes" IS commented out.  (lines 543-569) 
    * make sure the 16 lines below the text "//this is the real API search below" IS NOT commented out.  (lines 573-598) 


# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
# jjvProject3
