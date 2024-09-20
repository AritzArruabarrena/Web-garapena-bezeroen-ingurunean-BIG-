function argazkiak(){
const displayImage = document.getElementById("display-image");

function showImage(imageUrl) {
  displayImage.src = imageUrl;
  displayImage.style.display = "block";
}

var radioBJauna = document.getElementById("Jauna");

var radioBAnderea = document.getElementById("Anderea");

radioBJauna.addEventListener("click", function () {
  showImage("../img/caraHombre.jpg");
});
}
