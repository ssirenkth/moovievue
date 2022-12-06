
import highscoreView from "../views/highscoreView.js";
import promiseNoData from "../views/promiseNoData.js";
import resolvePromise from "../resolvePromise.js";


const highscore = {
    props: [""],
    data() { return {username: "", userHighscore: 0, topHighscores: {},} },
    created() { 
        /**
         * Initialise username and password
         * Calls the fetch method for the highscore.
         */
        //username = props.username
        //password = props.password
        //this.fetchTopHighScores(),

    },

    methods: {
        /**
         * Fetch top highscores from database.
         * 
         * playGameACB button function - let's user play another game.
         * backToMenuACB button function - takes user back to menu.
         */
        playGameACB() {

        },
        backToMenuACB() {

        },
        fetchTopHighScores() {

        }

    },
    render() {
        
        
        return <div>
                {
                    promiseNoData(this.resultsPromiseState) ||
                    <highscoreView onPlayGame={this.playGameACB}/>
                }
        </div>
    },
}
export default highscore;