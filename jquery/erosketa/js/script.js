$(document).ready(function () {
    $(".needs-validation").on("submit", function (e) {
      if (!this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      $(this).addClass("was-validated");
    });
  
    $(".gehitu").on("click", function (e) {
      var newItem = $("#validationCustom01").val();
  
      if (newItem) {
        $("#items").append("<li>" + newItem + "</li>");
        $("#validationCustom01").val("");
      } else {
        alert("Mesedez sartu ezazu zerbait erosketarako");
      }
    });
  
    $(".bukatu").on("click", function (i) {
      $("#items").css("background-color", "green");
      $("#items").css("color", "white");
      $("#items").css("border", "solid 1px black");
      alert("Zure erosketa listo dago");
    });
  });
  