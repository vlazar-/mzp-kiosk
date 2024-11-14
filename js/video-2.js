document.addEventListener("DOMContentLoaded", function () {
    const mainVideo = document.getElementById("mainVideo");
    const videoTitle = document.querySelector(".video-element h2");
    const playlistItems = document.querySelectorAll("#videoPlaylist li");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const fullscreenButton = document.getElementById("fullscreenButton");

    // Functionality for switching video from playlist
    playlistItems.forEach(item => {
        item.addEventListener("click", function () {
            const videoSrc = this.getAttribute("data-video");
            const videoTitleText = this.textContent;

            // Store current width and height of the video element
            const currentWidth = mainVideo.clientWidth;
            const currentHeight = mainVideo.clientHeight;

            // Set new video source
            mainVideo.querySelector("source").src = videoSrc;
            mainVideo.load();
            mainVideo.play();

            // Set the video dimensions explicitly to prevent shrinking
            mainVideo.style.width = `${currentWidth}px`;
            mainVideo.style.height = `${currentHeight}px`;

            // Update the title with the selected video title
            videoTitle.textContent = videoTitleText;
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
