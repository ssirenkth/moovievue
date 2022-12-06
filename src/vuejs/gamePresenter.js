import gameView from "../views/gameView.js";
import promiseNoData from "../views/promiseNoData.js";
import resolvePromise from "../resolvePromise.js";


const game = {
    props: [""],
    data() {},
    created() {},

    methods: {
        /**
         * Needs to fetch and send trailers, questions and answers back and forth to the database and gameView
         */

    },
    render() {   
        return <div>
                {
                    promiseNoData(this.resultsPromiseState) ||
                    <gameView/>
                }
        </div>
    },
}
export default game;