# mooviedeployed

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# mooviequiz
 Iprog project <br>

https://trello.com/invite/b/YdpMw3yH/ATTI06ceb7225d6cfdfc68a81ac4e2a90bbaC52B6884/agile-board-template-trello <br>

Figma <br>
https://www.figma.com/file/3KUWFnuHqBjgG0i7Em4SCL/Untitled?node-id=4%3A223&t=agBw1kM2whC1dRf3-1 <br>

Deployed app <br>
https://mooviequiz-5f5d4.web.app/

Alternate <br>
https://test-2-c09e4.web.app/
## Your project file structure (short description/purpose of each file)
### MoovieVue folder
* **firebaserc -** config for firebase
* **.gitignore -** contain package lock file 
* **babel.config.js -** Came from when setting up Vue project
* **firebase.json -** Just some settings for the firebase.
* **jsonconfig.json -** Settings for project, came from setting up Vue project
* **package-lock.json -** Settings for project, came from setting up Vue project
* **package.json -** Some configurations
* **.gitattributes -** Auto detect text files and perform LF normalization
* **README.md -** This README
* **vue.config -** Some configurations
### .firebase
* Cache files for firebase
### dist
* **404.html -** If the site is not found, this will show up
* **favicon.ico -** Just a picture for the top-left corner
* **index.html -** Some navigation for the site.
#### js
* Contains files needed for the firebase
### node_modules
* Contains files needed for the project
### public
* **404.html -** If the site is not found, this will show up
* **favicon.ico -** Just a picture for the top-left corner
* **index.html -** Some navigation for the site.
### src
* **firebaseModel.js -** update the firebase
* **main.js -** Creates the app.
* **Model.js -** keeps abstract data 
* **quizSource.js -** handels the API
* **resolvePromise.js -** resolve promise into the model ???promise state"
* **sample.html -** A sample youtube-video
* **trailsers.js -** trailer information 
#### assets
* **logo.png -** Just a picture
#### services
* **Api stuff**
#### views
* **app.js -** Handles all the views
* **gameView.js -** view for the game screen
* **highscoreView.js -** view for the highscore screen
* **instructionView.js -** view for the instruction screen
* **loginView.js -** view for the login screen
* **menuView.js -** view for the menu screen
* **navigation.js -** triggers navigation direclty from views 
* **promiseNoData.js -** show when there is no data 
#### vuejs
* **gamePresenter.js -** presenter for the game screen
* **highscorePresenter.js -** presenter for the highscore screen
* **index.js -** stub for bootstraping
* **instructionsPresenter.js -** presenter for the instructions screen
* **loginPresenter.js -** presenter for the login screen
* **menuPresenter.js -** presenter for the menu screen
* **show.js -** Handles only showing the current screen.
* **VueRoot.js -** root component to display the app
