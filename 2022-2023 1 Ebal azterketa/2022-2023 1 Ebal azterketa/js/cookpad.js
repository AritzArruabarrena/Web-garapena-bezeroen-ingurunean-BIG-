$(document).ready(function () {
  $("#cookpad-img").click(function () {
    $(this).animate(
      {
        opacity: 0.5, // Cambia la opacidad
        height: "toggle", // Cambia la altura, alternando mostrar/ocultar
      },
      2000
    ); // Duración de la animación: 2 segundos
  });
});

$(document).ready(function () {
  $("#validar-btn").click(function () {
    var seleccion = $("#herrialde option:selected").html(); // Obtener el país seleccionado

    if (seleccion === "Aukeratu") {
      alert("Mesedez, aukeratu herrialde bat."); // Mostrar alerta si no se selecciona un país
      return false; // Detener la ejecución
    }

    // Cargar el archivo JSON usando Ajax
    $.ajax({
      url: "cookpad.json", // Ruta al archivo JSON
      dataType: "json", // Tipo de datos que se espera
      success: function (datuak) {
        // Filtrar recetas según el país seleccionado
        for (var i = 0; i < datuak.length; i++) {
          if (datuak[i].herrialdea === seleccion) {
            var errezetak = datuak[i].errezetak; // Obtener las recetas para el país seleccionado

            // Mostrar las recetas en el HTML
            var errezetaHtml = ""; // Variable para acumular el HTML
            for (var j = 0; j < errezetak.length; j++) {
              errezetaHtml +=
                '<div class="recipe">' +
                "<h4>Errezeta " +
                (j + 1) +
                "</h4>" +
                '<img src="' +
                errezetak[j].izena +
                '" class="img-fluid img-thumbnail" style="max-width: 250px;" alt="Errezeta irudia">' + // Ajusta el tamaño aquí
                "</div>";
            }

            $("#recetas-container").html(errezetaHtml); // Añadir recetas al contenedor
            return; // Salir del bucle después de encontrar recetas
          }
        }
        alert("Ez da errezetarako daturik aurkitu."); // Alerta si no se encuentra recetas
      },
      error: function () {
        alert("Errorea datuak kargatzerakoan."); // Alerta en caso de error
      },
    });
  });
  $(document).ready(function() {
    // Muestra o esconde el formulario de nueva receta al hacer clic en "Errezeta berria"
    $("button:contains('Errezeta berria')").click(function() {
        $("#new-recipe-form").toggle(); // Alterna la visibilidad del formulario
    });

    // Valida el formulario al enviarlo
    $("#recipe-form").submit(function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Validación de Bootstrap
        if (this.checkValidity() === false) {
            event.stopPropagation(); // Detener la propagación si hay errores
        } else {
            // Aquí puedes agregar la lógica para guardar la receta
            alert("Errezeta gorde da:\nIzena: " + $("#recipe-name").val() +
                  "\nAzalpena: " + $("#recipe-description").val() +
                  "\nIrudia: " + $("#recipe-image").val());
            
            // Puedes limpiar el formulario después de guardar
            $("#recipe-name").val('');
            $("#recipe-description").val('');
            $("#recipe-image").val('');
        }
        $(this).addClass('was-validated'); // Agregar clase para mostrar validaciones de Bootstrap
    });
});
    $(".needs-validation").on("submit", function (e) {
      if (!this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      $(this).addClass("was-validated");
    });
});
