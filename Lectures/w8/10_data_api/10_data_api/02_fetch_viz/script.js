const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current=temperature_2m";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let temperature = data.current.temperature_2m;

    // Display the temperature
    document.querySelector("#temperature").textContent = temperature + "°C";

    // Use temperature to control the bar height
    document.querySelector("#temperature-bar").style.height =
      temperature * 8 + "px";
  });
