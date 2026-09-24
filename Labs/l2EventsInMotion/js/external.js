

document.getElementById("butClick").onclick = function() {alert("Surprise :))");
}



document.getElementById("popClick").onclick = function (){
    window.open("popup.html", "", "width=200, height=200");

}

document.getElementById("styleClick").onclick = function () {

    document.body.style.backgroundColor = "#8dffc8"
    document.getElementById("header").style.color ="#FF2990";
    document.getElementById("header").textContent = "One final surprise :))"
}
