const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current=wind_speed_10m";

let audio = document.querySelector("#wind-audio");
let button = document.querySelector("#play-button");

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let wind = data.current.wind_speed_10m;

    document.querySelector("#wind-speed").textContent =
      "Wind speed: " + wind + " km/h";

    // Convert wind speed into a volume between 0 and 1
    let volume = wind / 50;

    volume = Math.min(volume, 1);

    audio.volume = volume;
  });

button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    button.textContent = "Pause Soundscape";
  } else {
    audio.pause();
    button.textContent = "Play Soundscape";
  }
});
