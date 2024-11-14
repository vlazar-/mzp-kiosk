document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("mainVideo");
  const playButtonOverlay = document.getElementById("playButtonOverlay");

  // Show the play button when the video is paused or ended
  function showPlayButton() {
      playButtonOverlay.style.display = "block";
  }

  // Hide the play button when the video is playing
  function hidePlayButton() {
      playButtonOverlay.style.display = "none";
  }

  // Initially show the play button
  showPlayButton();

  // Show play button when video is paused or ended
  video.addEventListener("pause", showPlayButton);
  video.addEventListener("ended", showPlayButton);

  // Hide play button when video is playing
  video.addEventListener("play", hidePlayButton);

  // Play video when play button is clicked
  playButtonOverlay.addEventListener("click", function () {
      video.play();
  });
});

