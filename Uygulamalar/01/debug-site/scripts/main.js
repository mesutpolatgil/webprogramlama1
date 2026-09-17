const baslik = document.querySelector("h2");
const buton = document.querySelector("#degistir");
const gorevler = document.querySelectorAll("#gorevler li");

function basligiDegistir() {
  baslik.textContent = "Tüm hataları çözdüm!";
}

buton.addEventListener("click", basligiDegistir());

function durumuDegistir(olay) {
  olay.target.classList.toggle("tamamlandi");
}

gorevler.forEach((gorev) => {
  gorev.addEventListener("click", durumuDegistir);
});