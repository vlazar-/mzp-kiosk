document.addEventListener("DOMContentLoaded", function () {
  const mainVideo = document.getElementById("mainVideo");
  const playlistItems = document.querySelectorAll("#videoPlaylist li");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const fullscreenButton = document.getElementById("fullscreenButton");

  // Functionality for switching video from playlist
  playlistItems.forEach(item => {
    item.addEventListener("click", function () {
      const videoSrc = this.getAttribute("data-video");
      mainVideo.querySelector("source").src = videoSrc;
      mainVideo.load();
      mainVideo.play();
    });
  });

  // Toggle play/pause on video click
  mainVideo.addEventListener("click", function () {
    if (mainVideo.paused) {
      mainVideo.play();
    } else {
      mainVideo.pause();
    }
  });

  // Play button functionality
  playButton.addEventListener("click", function () {
    mainVideo.play();
  });

  // Pause button functionality
  pauseButton.addEventListener("click", function () {
    mainVideo.pause();
  });

  // Fullscreen button functionality
  fullscreenButton.addEventListener("click", function () {
    if (mainVideo.requestFullscreen) {
      mainVideo.requestFullscreen();
    } else if (mainVideo.webkitRequestFullscreen) {
      mainVideo.webkitRequestFullscreen();
    } else if (mainVideo.msRequestFullscreen) {
      mainVideo.msRequestFullscreen();
    }
  });
});
