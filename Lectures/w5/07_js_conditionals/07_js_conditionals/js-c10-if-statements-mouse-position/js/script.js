window.addEventListener("mousemove", function (event) {
  let cX = event.clientX;
  let cY = event.clientY;

  document.getElementById("client-x").innerHTML = cX;
  document.getElementById("client-y").innerHTML = cY;

  if (cX > 400 && cX < 800) {
    document.body.style.backgroundColor = "gray";
  } else {
    document.body.style.backgroundColor = "lightgray";
  }
});

let colorBox = document.getElementById("color-box");

colorBox.addEventListener("mousemove", function (event) {
  let oX = event.offsetX;
  let oY = event.offsetY;

  document.getElementById("offset-x").innerHTML = oX;
  document.getElementById("offset-y").innerHTML = oY;

  if (oX < 200) {
    colorBox.style.backgroundColor = "red";
  } else {
    colorBox.style.backgroundColor = "yellow";
  }
});
