let hold = false;

for (let i = 0; i < 60*60; i++) {
  let malakocka = document.createElement("div");
  malakocka.classList.add("malakocka");
  document.getElementById("mala").appendChild(malakocka);
  malakocka = document.createElement("div");
  malakocka.classList.add("malakocka");
  document.getElementById("velika").appendChild(malakocka);
}

function klik(event) {
  hold = true;
  track(event.clientX, event.clientY, event.target.offsetTop, event.target.offsetLeft);
}

function odklik(event) {
  hold = false;
}

function track(mouseX, mouseY, divX, divY) {
  let mala = document.getElementById("mala");
  let listener = document.addEventListener("mousemove", (e) => {
    if (hold == true) {
      mala.style.left = ((e.clientX - mouseX) + divY).toString() + "px";
      mala.style.top = ((e.clientY - mouseY) + divX).toString() + "px";
    }
  });
}
