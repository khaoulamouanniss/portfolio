const openVideoButton = document.getElementById("open-video");
const closeVideoButton = document.getElementById("close-video");
const videoPopup = document.getElementById("video-popup");
const aquaequaVideo = document.getElementById("aquaequa-video");

openVideoButton.addEventListener("click", function () {
    videoPopup.classList.add("active");
});

closeVideoButton.addEventListener("click", function () {
    videoPopup.classList.remove("active");
    aquaequaVideo.pause();
});

videoPopup.addEventListener("click", function (event) {
    if (event.target === videoPopup) {
        videoPopup.classList.remove("active");
        aquaequaVideo.pause();
    }
});