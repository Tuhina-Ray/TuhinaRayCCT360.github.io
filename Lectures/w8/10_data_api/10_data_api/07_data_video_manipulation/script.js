const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current=wind_speed_10m";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let wind = data.current.wind_speed_10m;

    let video = document.querySelector("#cloud-video");

    let speed = wind / 10;

    // Keep the video within a reasonable playback range
    // speed = Math.max(0.5, Math.min(speed, 3));

    video.playbackRate = speed;

    document.querySelector("#wind-speed").textContent =
      "Wind speed: " + wind + " km/h";

    document.querySelector("#playback-speed").textContent =
      "Video speed: " + speed.toFixed(1) + "×";
  });
