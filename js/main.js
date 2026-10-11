const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");
const vistaMovil = window.matchMedia("(max-width: 760px)");

function cambiarMenu(abierto) {
  botonMenu.setAttribute("aria-expanded", String(abierto));
  botonMenu.textContent = abierto ? "Cerrar" : "Menú";
  menu.hidden = !abierto;
}

function adaptarMenu() {
  botonMenu.hidden = !vistaMovil.matches;
  cambiarMenu(!vistaMovil.matches);
}

botonMenu.addEventListener("click", () => {
  const estaAbierto = botonMenu.getAttribute("aria-expanded") === "true";
  cambiarMenu(!estaAbierto);
});

menu.addEventListener("click", (evento) => {
  if (vistaMovil.matches && evento.target.closest("a")) {
    cambiarMenu(false);
  }
});

document.addEventListener("keydown", (evento) => {
  if (
    evento.key === "Escape" &&
    vistaMovil.matches &&
    botonMenu.getAttribute("aria-expanded") === "true"
  ) {
    cambiarMenu(false);
    botonMenu.focus();
  }
});

vistaMovil.addEventListener("change", adaptarMenu);

adaptarMenu();