// funkcija za menjanje slika na slajderu
var slajdIndex = 0;
prikaziSlajd();

function prikaziSlajd() {
    var i;
    var slajdovi = document.getElementsByClassName('slajdovi');
    for (i = 0; i < slajdovi.length; i++) {
        slajdovi[i].style.display = "none";
    }
    slajdIndex++;
    if (slajdIndex > slajdovi.length) {
        slajdIndex = 1
    }
    slajdovi[slajdIndex - 1].style.display = "block";
    setTimeout(prikaziSlajd, 2000);
}

//funkcija za validaciju forme

function validacija() {

    let ime = document.forms["forma"]["ime"].value;
    let email = document.forms["forma"]["email"].value;
    let poruka = document.forms["forma"]["poruka"].value;

    var imeFormat = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (ime == "") {
      alert("Ime je neophodno.");
      return false;
    }

    if (!ime.match(imeFormat)) {
      alert("Unesite puno ime.");
      return false;
  }

    if (email == "") {
        alert("Email je neophodan.");
        return false;
    }

    if (!email.match(emailFormat)) {
      alert("Proverite format email adrese.");
      return false;
  }

    if (poruka == "") {
        alert("Poruka ne sme biti prazna.");
        return false;
      }

      if (poruka.length < 30) {
        alert("Poruka mora imati najmanje 30 karaktera.");
        return false;
      }
}

  //Ajax

  function prikaziOpremu() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("ajax").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "oprema.txt");
    xhttp.send();
}
  