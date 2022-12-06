
export default function promiseNoData(promiseState) {
    if (!promiseState.promise) {
        return (
            <div>
                no data
            </div>
        )
    } else if (promiseState.error) {
        return (
            <div class="errorPromise">
                {promiseState.error.toString()}
            </div>
        )
    } else if (!promiseState.data) {
        return (
            <img class="loadingImage" src="http://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif"/>
        )
    }
    return false;
}