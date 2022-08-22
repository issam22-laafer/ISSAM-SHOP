// _____pre loaded_____________
var loader = document.getElementById("preloader");
window.addEventListener(
  "load",
  setTimeout(function () {
    // loader.style.display = "none";
    $("#preloader").fadeOut(800);
  }, 2000)
);
