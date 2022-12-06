function instructionScreen(props){
    return (
        /**
         * Display:
         * - MovieQuiz
         * - Instructions for the game
         * 
         * - Instructions
         * - Play game button (next to Back to menu)
         * - Back to menu button (next to play game)
         */
            <div class="background">
                <td class="MoovieQuiz"> 
                    MoovieQuiz
                </td> 
                <td>
                    Text about the game insstruction blablablablablabla
                </td>    
                <button class="centeredButton" onClick={onPlaygameCB}>Play game!</button>
                <button class="centeredButton" onClick={onMenuCB}>Go back to menu</button>
            </div>
    );
}

export default instructionScreen;
