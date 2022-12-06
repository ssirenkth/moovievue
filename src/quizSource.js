import apiKey from "./services/apiKey.js";
import { getImdbId } from "./trailers.js";
// 
// Example: http://www.omdbapi.com/?apikey=KEY&i=tt0120915 gets info of video tt0120915 

const API_KEY = apiKey
const BASE_URL = "https://www.omdbapi.com/"
async function fetchInfo(imdbId){
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbId}`);
    if(!response.code){
        return response.json();
    }
    console.log(`API error code: ${response.code}`)
}

export const getInfo = async function getInfo(trailerName){
    return await fetchInfo(getImdbId(trailerName))
}