document.getElementById('playButton').addEventListener('click', function () {
  var audio = document.getElementById('myAudio');
  audio.play();
});

const audio = document.getElementById("audio");
audio.addEventListener("play", handleFirstPlay, false);

let hasPlayed = false;
function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    const a = event.target;
    a.removeEventListener("play", handleFirstPlay);
  }
}