function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {

  let tema = getCookie("korisnickaTema");
  console.log(tema);
  if (tema != "") {
      if (tema === "svetla") {
          let body = document.body;
          body.classList.toggle("svetlaTema");
          let header = document.querySelector('#header');
          header.classList.toggle("svetlaTema");
      }
  }

  else {
      tema = prompt("Unesite temu (svetla/tamna) i osvezite stranicu kako bi se prikazale izmene: ");
      setCookie("korisnickaTema", tema, 30);
  }
}