/* eslint-disable */
import { getInfo } from "@/quizSource.js";
import { render } from "vue";
import { getYoutubeId, getStartTime } from "../trailers.js";

function GameView(props) {
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new window.YT.Player("player", {
      height: "390",
      width: "640",
      videoId: getYoutubeId("phantom_menace"),
      playerVars: {
        playsinline: 1,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        modestbranding: 1,
        start: getStartTime("phantom_menace"),
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function answerOptionCB(answer) {
    function answered() {
      console.log("Answered: ", answer);
    }

    return <button onClick={answered}>{answer}</button>;
  }

  return (
    /**
            Display:
            movietrailer,
            1 Question 
            4 answers (one right). All clickable buttons

            When clicked, make sure to send the next movie in.
            
         */
              <div class="background">
      <td class="MoovieQuiz">MoovieQuiz</td>

      <td>trailer</td>
      <div id="player"></div>
      {/* {onYouTubeIframeAPIReady()} */}

      <td>Guess the movie</td>
      {`${props.sampleMovie.data.Title}`}
      <img src={props.sampleMovie.data.Poster}></img>


      {/* {props.trailer.map(answerOptionCB)} */}
    </div>


  );
}

export default GameView;
