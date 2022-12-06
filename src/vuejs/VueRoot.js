// import QuizModel from "../Model";
// import resolvePromise from "../resolvePromise";

import { getInfo } from "@/quizSource";
import resolvePromise from "@/resolvePromise";
import GameView from "@/views/gameView";
import promiseNoData from "@/views/promiseNoData";
// import App from "../views/app";

const VueRoot = {
    props: ["model"],
    data() {
        return {
            // rootModel: new Model(),
            moviePromiseState: {}
        };
    },
    created() {
    },
    methods: {

        getMovieACB(){
            resolvePromise(getInfo("phantom_menace"), this.moviePromiseState)
        }

    },
    render() {
        if(!this.moviePromiseState.promise){
            this.getMovieACB();
        }
        return (
            <div>
                { promiseNoData(this.moviePromiseState) || (<GameView sampleMovie={this.moviePromiseState}/>)}
            </div>
        );
    },
};
export default VueRoot;
