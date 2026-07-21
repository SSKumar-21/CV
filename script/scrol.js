const scrollAudio = document.getElementById("scrollAudio");

scrollAudio.volume = 0.15;

let scrolling = false;
let scrollTimeout;

window.addEventListener("scroll", () => {

    if (!scrolling) {
        scrolling = true;

        scrollAudio.currentTime = 0;
        scrollAudio.play().catch(() => {});
    }

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {

        scrolling = false;

        scrollAudio.pause();
        scrollAudio.currentTime = 0;

    }, 150);

});