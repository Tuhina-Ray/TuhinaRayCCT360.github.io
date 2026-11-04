const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=43.65&longitude=-79.38&current=cloud_cover";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    let clouds = data.current.cloud_cover;
    console.log(data); // See the entire API response
    console.log(clouds); // See just the cloud cover value

    document.querySelector("#cloud-cover").textContent =
      "Cloud cover: " + clouds + "%";

    let image = document.querySelector("#landscape");
    image.style.filter = `grayscale(${clouds}%) brightness(${100 - clouds / 2}%)`;
  });
