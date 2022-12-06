// this is a stub for TW3.5 bootstraping. It helps with a few lab specifics
import {render, h} from "vue";

// needed for View JSX. In a Vue project you can use import {h} from "vue"
window.React= {createElement:h};

import firebase from "firebase/app";
import "firebase/database";

// needed for plugging in a "mock" firebase for testing. In the project simply import firebase where needed, as above
window.firebase=firebase;
// import navigation from "./views/navigation.js"
// TODO import navigation

// using require() instead of import, for the above assignments to take effect before VueRoot is loaded
const navigation = require("/src/views/navigation.js").default;

const VueRoot=require("/src/vuejs/VueRoot.js").default;

// TODO render VueRoot into the "root" div
    render(
        <VueRoot/>
        , document.getElementById('app')
    );
