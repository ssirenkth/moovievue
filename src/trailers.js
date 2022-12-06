const trailers = {
    "phantom_menace":{
        "imdbId": "tt0120915",
        "videoId": "bD7bpG-zDJQ",
        "startTime": 40,
        "answerOptions": {
            "1": "Star Wars: The Phantom Menace",
            "2": "Star Wars: Attack of the Clones",
            "3": "Star Wars: The Empire Strikes Back",
            "4": "Star Wars: Return of the Jedi"
        },
        "correctAnswer": 1,
    }
} 
export const getImdbId = function getImdbId(trailerName){
    return trailers[trailerName].imdbId;
}

export const getYoutubeId = function getYoutubeId(trailerName){
    return trailers[trailerName].videoId;
}

export const getStartTime = function getStartTime(trailerName){
    return trailers[trailerName].startTime;
}