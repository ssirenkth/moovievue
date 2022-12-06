// import QuizModel from "../Model";
// import resolvePromise from "../resolvePromise";

import App from "../views/app";

const VueRoot = {
    data() {
        return {
            // rootModel: new Model(),
        };
    },
    created() {
    },
    methods: {

    },
    render() {
        return (
            <div>
                {(<App/>)}
            </div>
        );
    },
};
export default VueRoot;
