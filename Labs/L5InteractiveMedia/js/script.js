const zenRipples = document.getElementById("zenRipples");

const noteTimes = [[0.0,5.0],[7.0,12.0],[14.0,19.0]];

let stopTimer;

document.addEventListener("click", function(event) {
    const randomIndex = Math.floor(Math.random()*noteTimes.length);
    const [startTime, endTime] = noteTimes[randomIndex];

    clearTimeout(stopTimer);
    zenRipples.pause();

    zenRipples.currentTime = startTime;

    zenRipples.play().then(() => {
        stopTimer = setTimeout(() => {
            zenRipples.pause();
        }, (endTime - startTime)*1000);
    }).catch(error => {
    console.error("Could not play audio:", error);
    });
});