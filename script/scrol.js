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




window.addEventListener("load", () => {

    const sound = new Audio("./assets/intro.mp3"); 

    setTimeout(() => {
        sound.play()
            .then(() => {
                console.log("Sound played successfully.");
            })
            .catch((error) => {
                console.error("Unable to play sound:", error);
            });
    }, 2000);

});