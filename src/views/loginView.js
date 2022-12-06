
function loginScreen(props) {

    function onLoginCB() {
        //Check if personData.username and personData.password is in database, else create new user.
        window.location.hash = "#menu";
    }
    function setSearchTextACB(evt){
        props.onSetUsername(evt.target.value);
    }
    function setSearchTypeACB(evt) {
        props.onSetPassword(evt.target.value);
    }
    
    return (
        /**
         * Display:
         * - Welcome to
         * - MovieQuiz
         * 
         * - Username entry box
         * - Password entry box
         * - Login button
         */
        <div class="background">
            <td> 
                Welcome to
            </td>
            <td class="MoovieQuiz"> 
                MoovieQuiz            </td>    
                    
            <input placeholder="Username" value="" onChange={setUsernameTextACB}/>
            <input placeholder="Password" value="" onChange={setPasswordTextACB}/>
            <button class="centeredButton" onClick={onLoginCB}>Login</button>

            
        </div>


    );
}


export default loginView;