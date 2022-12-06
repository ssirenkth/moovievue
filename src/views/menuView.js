function menuScreen(props) {
    
    return (
        /**
         * Display:
         * - Play game button
         * 
         * - Show highscore button
         * - Game instructions
         */
        <div class="background">
            <td class="MoovieQuiz"> 
                MoovieQuiz
            </td> 

            <button class="centeredButton" onClick={onPlaygameCB}>Play game!</button>
            
            <button class="centeredButton" onClick={onLeaderboardCB}>Show leaderboard</button>
            <button class="centeredButton" onClick={onInstructionCB}>Game instruction</button>            
        </div>

);
}


export default menuScreen;