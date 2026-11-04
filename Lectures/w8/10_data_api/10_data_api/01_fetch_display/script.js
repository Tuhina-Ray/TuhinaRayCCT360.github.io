const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current=temperature_2m";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let temperature = data.current.temperature_2m;

    document.querySelector("#temperature").textContent = temperature + "°C";
  });
