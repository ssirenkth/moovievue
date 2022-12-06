
// Add relevant imports here 

//import firebaseConfig from "./firebaseConfig.js";
import DinnerModel from "./Model";
import { getDishDetails } from "./quizSource";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
const REF = "dinnerModel57"

function observerRecap(model) {
    function observerACB(payload) {
        console.log(payload)
    }
    model.addObserver(observerACB);
}

function firebaseModelPromise() {
    function makeDishPromiseCB(dishId) {
        return getDishDetails(dishId);
    }
    async function makeBigPromiseACB(firebaseData) {
        function createModelACB(result) {
            return new DinnerModel(firebaseData.val().numberOfGuests, result);
        }
        if (!firebaseData.val() || (!firebaseData.val().dishesInMenu && !firebaseData.val().numberOfGuests)) {
            return new DinnerModel();
        } else if (!firebaseData.val().dishesInMenu && firebaseData.val().numberOfGuests) {
            return new DinnerModel(firebaseData.val().numberOfGuests)
        }
        const dishPromiseArray = Object.keys(firebaseData.val().dishesInMenu).map(makeDishPromiseCB);
        const result = await Promise.all(dishPromiseArray);
        return createModelACB(result);

    }

    return firebase.database().ref(REF).once("value").then(makeBigPromiseACB);
}
function gotDataACB(firebaseData) {
    if (firebaseData) {
        console.log(firebaseData.val())
    } else {
        console.log("The firebase data was undefined.")
    }

}

function updateFirebaseFromModel(model) {
    async function updateDBCallback(payload) {
        if (!payload) return;
        if (payload.addDish) {
            firebase.database().ref(REF + `/dishesInMenu/${payload.addDish.id}`).set(payload.addDish.title);
        }
        if (payload.removeDish) {
            firebase.database().ref(REF + `/dishesInMenu/${payload.removeDish.id}`).set(null);
        }
        if (payload.doSetCurrentDish) {
            firebase.database().ref(REF + "/currentDish").set(model.currentDish);
        }
        if (payload.nrOfGuests) {
            firebase.database().ref(REF + "/numberOfGuests").set(model.numberOfGuests);
        }
    }
    model.addObserver(updateDBCallback);
    return;
}

function updateModelFromFirebase(model) {
    function fetchDishDataBasedOnID(id) {
        return getDishDetails(id);
    }

    firebase.database().ref(REF + "/numberOfGuests").on("value",
        function guestsChangedInFirebaseACB(firebaseData) { model.setNumberOfGuests(firebaseData.val()); }
    );
    firebase.database().ref(REF + "/currentDish").on("value",
        function dishChangedInFirebaseACB(firebaseData) { model.setCurrentDish(firebaseData.val()); }
    );

    firebase.database().ref(REF + "/dishesInMenu").on("child_added",
        async function dishesAddedToMenuInFirebaseACB(data) {
            if (!model.dishes.find((d) => d.id === +data.key)) {
                const dishData = await fetchDishDataBasedOnID(+data.key);
                model.addToMenu(dishData)
            }
        }
    );
    firebase.database().ref(REF + "/dishesInMenu").on("child_removed",
        function dishesremovedFromMenuInFirebaseACB(data) { model.removeFromMenu({ id: +data.key }) }
    );
    return;
}
export { observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase };
