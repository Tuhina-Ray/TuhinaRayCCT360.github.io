const zenRipples = document.getElementById("zenRipples");

const noteTimes = [
    [0.0,5.0],
    [7.0,12.0],
    [14.0,19.0],
    [21.0,26.0],
    [27.0,33.0],
    [35.0,39.0],
    [41.0,47.0],
];

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
    })

    const ripple = document.createElement("div");
    ripple.classList.add("ripple");

    ripple.style.left = event.pageX + "px";
    ripple.style.top = event.pageY + "px";

    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });

});