const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current=temperature_2m";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let temperature = data.current.temperature_2m;

    document.querySelector("#temperature").textContent = temperature + "°C";

    if (temperature < 10) {
      document.body.className = "cold";

      document.querySelector("#message").textContent =
        "It's feeling cold today.";
    } else if (temperature < 25) {
      document.body.className = "mild";

      document.querySelector("#message").textContent =
        "It's feeling pretty mild.";
    } else {
      document.body.className = "hot";

      document.querySelector("#message").textContent = "It's a hot one!";
    }
  });
