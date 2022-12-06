/* eslint-disable */ 

/* 
   This component uses Vue-specific and React-specific presenters: Sidebar, Summary, Search, Details, Show 
   Therefore it needs to import from alternative paths, depending on the framework. 
   To achieve that, we use require() with a prefix, instead of import.
*/
// const PREFIX = window.location.toString().includes("react") ? "reactjs" : "vuejs";

// const Game = require("../" + PREFIX + "/gamePresenter.js").default;
// const Login = require("../" + PREFIX + "/loginPresenter.js").default;
// const Menu = require("../" + PREFIX + "/menuPresenter.js").default;
// const Highscore = require("../" + PREFIX + "/highscorePresenter.js").default;
// const Instructions = require("../" + PREFIX + "/instructionsPresenter.js").default;
// const Show = require("../" + PREFIX + "/show.js").default
import GameView from "./gameView";

export default
    function App(props) {
    return (
        <div class="displayParent">
            <GameView/>
        </div>
    );
}
