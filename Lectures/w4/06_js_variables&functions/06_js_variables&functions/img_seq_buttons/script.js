let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

function showSequenceOne() {
  image1.src = "images/image1.png";
  image2.src = "images/image2.png";
  image3.src = "images/image3.png";
}

function showSequenceTwo() {
  image1.src = "images/image3.png";
  image2.src = "images/image1.png";
  image3.src = "images/image2.png";
}

let btn1 = document.getElementById("sequence-one");
btn1.addEventListener("click", showSequenceOne);

let btn2 = document.getElementById("sequence-two");
btn2.addEventListener("click", showSequenceTwo);
