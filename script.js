var footer = document.querySelector(".footer");
var audio = document.getElementById("crunch");
var audio = document.getElementById("music");

var display = true;

function hideShow() {
    if (display) {
      footer.style.display = "none";
      crunch.play();
      music.play();

    } else {

      footer.style.display = "block";
    }
    display = !display;
  }
