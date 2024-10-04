let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});
overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".topo-do-site", {
  duration: 4000,
  distance: "200px",
  origin: "top",
});
sr.reveal(".especialidades", {
  origin: "bottom",
  distance: "200px",
  duration: 4000,
});
sr.reveal(".sobre", { duration: 4000, distance: "200px", origin: "left" });
sr.reveal(".titulo", { duration: 4000, distance: "200px", origin: "top" });
sr.reveal(".portifolio", { duration: 4000 });
sr.reveal(".project", {
  duration: 4000,
  distance: "500px",
  delay: 500,
  origin: "left",
});
sr.reveal(".tec-box", {
  duration: 4000,
  distance: "200px",
  delay: 500,
  origin: "left",
});

const $html = document.querySelector("html");
const $modo = document.getElementById("trilho");

$modo.addEventListener("click", function () {
  $html.classList.toggle("light-mode");
  color = "#ffff";
  color = "#000";
  $modo.classList.toggle("light");
});

particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 1 },
    line_linked: { enable: true, opacity: 1 },
    move: { enable: true, speed: 1 },
  },
});
