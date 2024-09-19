function mezua() {
  return "Kaixo Mundua!!!!";
}

function notak() {
  var nota1 = prompt("Sartu lehenengo nota:");
  var nota2 = prompt("Sartu bigarrengo nota:");
  var nota3 = prompt("Sartu hirugarren nota:");

  const batazbestekoa =
    (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

  alert("Batazbesteko nota: " + batazbestekoa);
}

function pasahitza() {
  var pasahitza1, pasahitza2;
  var egiaztatu = new Boolean(true);
  while (egiaztatu) {
    pasahitza1 = prompt("Sartu lehenengo pasahitza:");
    pasahitza2 = prompt("Sartu bigarrengo pasahitza:");
    if (pasahitza1 == pasahitza2) {
      alert("Pasahitza berdina da!");
      egiaztatu = false;
    } else {
      alert("Pasahitza ez da berdina!");
    }
  }
}

function faktorialaKalkulatu() {
  var zenbakia = prompt("Sartu zenbaki bat bere faktoriala kalkulatzeko");
  zenbakia = parseInt(zenbakia);
  if (isNaN(zenbakia) || zenbakia < 0) {
    return alert("Zenbaki bat sartu behar duzu");
  }
  let emaitza = 1;
  for (let i = 2; i <= zenbakia; i++) {
    emaitza *= i;
  }
  return alert("Faktoriala: " + emaitza);
}

function berrikuspena() {
  var liburuak = [
    { titulua: "Txomin Dutxan", autorea: "Liesbet Slegers", irakurrita: false },
    {
      titulua: "Txomin Komunean",
      autorea: "Liesbet Slegers",
      irakurrita: true,
    },
  ];

  var erantzuna = prompt("Esan liburuaren titulua");

  var aurkitua = false;

  liburuak.forEach((liburua) => {
    if (liburua.titulua === erantzuna) {
      aurkitua = true;
      if (liburua.irakurrita) {
        alert(
          "“Liburu hau irakurrita daukazu " +
            liburua.titulua +
            " ,Autorea: " +
            liburua.autorea
        );
      } else {
        alert(
          "Liburu hau irakurri behar duzu " +
            liburua.titulua +
            " ,Autorea: " +
            liburua.autorea
        );
      }
    }
  });

  if (!aurkitua) {
    alert("Ez da libururik aurkitu titulu horrekin.");
  }
}

function liburuMenua() {
  var liburuak = []; 
  var irten = false; 

  while (!irten) {
    var menua = prompt(
      "1. Liburua Gehitu \n 2. Liburu lista ikusi \n 3.Liburua ezabatu \n 4. Irten"
    );
    menua = parseInt(menua);

    switch (menua) {
      case 1:
        var izena = prompt("Sartu liburuaren izena: ");
        var titulua = prompt("Sartu liburuaren titulua: ");
        var irakurri = prompt("Sartu irakurri duzun edo ez (bai/ez): ").toLowerCase();
        
        if (irakurri === "bai") {
          irakurri = true;
        } else if (irakurri === "ez") {
          irakurri = false;
        } else {
          alert("Mesedez sartu bai edo ez");
          break; 
        }

        liburuak.push({ izena: izena, titulua: titulua, irakurri: irakurri });
        break; 

      case 2:
        if (liburuak.length > 0) {
          var lista = liburuak.map(liburua => 
            `Izena: ${liburua.izena}, Titulua: ${liburua.titulua}, Irakurrita: ${liburua.irakurri ? 'Bai' : 'Ez'}`
          ).join('\n');
          alert(lista);
        } else {
          alert("Ez dago libururik.");
        }
        break; 
      
      case 3:
        liburuaren_izena = prompt("Sartu liburuaren izena ezabatzeko: ");
        liburuak = liburuak.filter(liburua => liburua.izena !== liburuaren_izena);
        alert("Liburua ezabatu da, baldin eta zerrendan aurkitzen bazen.");
        break;
      case 4:
        irten = true; 
        break; 

      default:
        alert("Aukera ezagutzen ez den aukera.");
        break; 
    }
  }
}
