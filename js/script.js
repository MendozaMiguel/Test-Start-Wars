function afficherMenu() {
  document.getElementById("hidden").setAttribute("class", "block");
}

let Parallax0 = document.querySelector("#background-logo");
let Parallax1 = document.querySelector("#logo");

let yPosition;

function scrollLoop() {

  yPosition = window.scrollY;
  console.log("scroll vertical: ", yPosition);
  setTranslate(0, yPosition * -0.1 / 5, Parallax0);
  setTranslate(0, yPosition * -1 / 5, Parallax1);

  window.addEventListener("scroll", scrollLoop);
  if (yPosition === 500) {
    document.getElementById("mytest").style.display = "block";
  }
  if (yPosition === 1000) {
    document.getElementById("mytest").style.display = "none";
  }
}

let xPos = 0
function setTranslate(xPos, yPos, el) {
  el.style.transform = "Translate3d(" + xPos + "," + yPos + "px,0)";
}

window.scrollLoop()



// NAVBAR
document.getElementById('nofrills-toggle').onclick = function () {
  var nf = document.getElementById('dropdown-items');

  if (nf.style.display === 'none') {
    nf.style.display = 'flex';
  }
  else {
    nf.style.display = 'none';
  }
};