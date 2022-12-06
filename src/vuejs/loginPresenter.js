import loginView from "../views/loginView.js";
import promiseNoData from "../views/promiseNoData.js";
import resolvePromise from "../resolvePromise.js";


const Search = {
    props: [""],
    data() { return {username: "", password: "", resultsPromiseState: {} } },
    created() { },

    methods: {
        /**
         * The login presenter needs username and password to fetch data from the database and then either create a new user or sign in existing user.
         * @param {*} username : The Username of a user
         * @param {*} password : The Password of a user
         */

        setUsernameACB(username) {
            this.Username = username;

        },
        setPasswordACB(password) {
            this.searchType = password;
        },

        loginACB() {
            // Use this.username and this.password to ask for a user from the database. And then either create new user or simply login existing user.
            //resolvePromise(searchDishes({type: this.searchType, query: this.searchQuery}), this.resultsPromiseState)
        },
    },
    render() {
        if (!this.resultsPromiseState.promise) {
            this.searchNowACB();
        }
        
        return <div>
                {
                    promiseNoData(this.resultsPromiseState) ||
                    <loginView/>
                }
        </div>
    },
}
export default loginPresenter;
