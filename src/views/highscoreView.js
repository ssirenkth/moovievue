import { sortIngredients } from "../utilities";
/* Functional JSX component. Name starts with capital letter */
function highScoreScreen(props){
    return (
        /**
         * Display:
         * - Top 5 highscores and the username of who got that score
         * - The users top highscore (or empty string if none)
         * 
         * Back to menu button
         * Play game button / play again button (next to menu button)
         */
            <div class="background">

                <button class="centeredButton" onClick={onPlaygameCB}>Play game!</button>
                <button class="centeredButton" onClick={onMenuCB}>Go back to menu</button>}

export default highScoreScreen;
