let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

function changeImage1() {
  image1.src = "images/image2.png";
}

function changeImage2() {
  image2.src = "images/image3.png";
}

function changeImage3() {
  image3.src = "images/image1.png";
}

image1.addEventListener("click", changeImage1);
image2.addEventListener("click", changeImage2);
image3.addEventListener("click", changeImage3);
