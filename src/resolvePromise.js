export default
    function resolvePromise(promise, promiseState, notify) {
        console.log("Hello from resolvePromise", promiseState)
    /**Don't know if necessary or not
    if(promiseState.promise 
        && !promiseState.data && !promiseState.error)  // not yet resolved/rejected
           cancelPromise(promiseState.promise);*/
    if (promise == null) return;
    promiseState.promise = promise;
    promiseState.data = null;
    promiseState.error = null;
    if (notify)      // if a 3rd parameter was sent, we expect it to be a function (ACB)!
        notify();  // so we can call it to notify every time promise, data, or error change

    function saveDataACB(result) {
        //console.log("Managed to saveData", result)
        if (promiseState.promise !== promise) return;
        /* TODO save result in promiseState */
        /* TODO notify */
        promiseState.data = result;
        if (notify) notify();

    }
    function saveErrorACB(err) {
        /* TODO promise check as above */
        /* TODO save err in promiseState */
        /* TODO notify */
        if (promiseState.promise !== promise) return;
        promiseState.error = err;
        if (notify) notify();

    }
    promise.then(saveDataACB).catch(saveErrorACB);
}
