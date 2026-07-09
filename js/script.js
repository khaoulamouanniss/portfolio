const openVideoButton = document.getElementById("open-video");
const closeVideoButton = document.getElementById("close-video");
const videoPopup = document.getElementById("video-popup");
const aquaequaVideo = document.getElementById("aquaequa-video");

/* Ouvrir la popup vidéo */
openVideoButton.addEventListener("click", function () {
    videoPopup.classList.add("active");
});

/* Fermer la popup avec le bouton */
closeVideoButton.addEventListener("click", function () {
    videoPopup.classList.remove("active");
    aquaequaVideo.pause();
});

/* Fermer la popup en cliquant sur le fond sombre */
videoPopup.addEventListener("click", function (event) {
    if (event.target === videoPopup) {
        videoPopup.classList.remove("active");
        aquaequaVideo.pause();
    }
});