function toggleBloque() {


    var demo = document.getElementById("textobiografia");


    if (demo.style.display === "block") {
        demo.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Leer Más..";

    } else {

        demo.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Leer Menos..";
    }
}

function showCategory(type) {

var paseoElement = document.getElementById("paseo");
var friendsElement = document.getElementById("friends");
var danceElement = document.getElementById("dance");

var paseoBtnElement = document.getElementById("paseo-btn");
var friendsBtnElement = document.getElementById("friends-btn");
var danceBtnElement = document.getElementById("dance-btn");
switch (type) {
    case "friends":
        paseoElement.style.display = "none";
        danceElement.style.display = "none";
        friendsElement.style.display = "block";

        paseoBtnElement.style.backgroundcolor = "#f1f8e9";
        danceBtnElement.style.backgroundcolor = "#f1f8e9";
        friendsBtnElement.style.backgroundcolor = "#ffcdd2";
        break;
    case "dance":
        paseoElement.style.display = "none";
        friendsElement.style.display = "none";
        danceElement.style.display = "block";

        friendsBtnElement.style.backgroundcolor = "#f1f8e9";
        paseoBtnElement.style.backgroundcolor = "#f1f8e9";
        danceBtnElement.style.backgroundcolor = "#ffcdd2"; 
        break;
    default:
        friendsElement.style.display = "none";
        danceElement.style.display = "none";
        paseoElement.style.display = "block";

        danceBtnElement.style.backgroundcolor = "#f1f8e9";
        friendsBtnElement.style.backgroundcolor = "#f1f8e9";
        paseoBtnElement.style.backgroundcolor = "#ffcdd2";
        break;
    }

}