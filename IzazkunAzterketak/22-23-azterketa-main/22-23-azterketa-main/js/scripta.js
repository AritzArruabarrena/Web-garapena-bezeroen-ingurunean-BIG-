var datuak = []
var erak = true;
$(document).ready(function() {
    $('#publikatuForm').hide();
    $("#erakutsi").click(Balidatu);
    $("#berria").click(berriaErakutsi);
    $("#irudia").click(irudiaAnimatu);
    $(".needs-validation").on("submit", function (e) {
        if (!this.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
        }
        $(this).addClass("was-validated");
      });
});
function Balidatu()
{
    if ($('#herrialde option:selected').html() == "Aukeratu")
    {
        alert("Herrialdea aukeratu behar duzu");
    }
    else
    {
        errezetakErakutsi();
    }
}
function errezetakErakutsi()
{
        /*Ajax erabili errezetak irakurtzeko*/
        var url = 'cookpad.json';
        $.ajax({
            type: "GET",
            url: url,
            success: function (data) {
                datuak = data;
                testua = "";
                for (i = 0; i < datuak.length; i++) {
                    if (datuak[i].herrialdea == $('#herrialde option:selected').html())
                    {
                        var errezetak = [];
                        errezetak = datuak[i].errezetak;
                        for (j = 0; j < errezetak.length; j++) {
                            testua += "<img class='irudia' src=" + errezetak[j].izena + " >";
                        }
                    }
                }
                $("#irudiak").html(testua);
            }
        });
}
function berriaErakutsi()
{
    $('#publikatuForm').toggle();
}
function irudiaAnimatu() 
{
    $( "#irudia" ).animate({
      opacity: 0.25,
      height: "50px"
    }, 2000, function() {
      // Animation complete.
    });
  };

