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
  distance: "700px",
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

const images = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
  "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  "https://cdn-icons-png.flaticon.com/512/919/919853.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
  "images/icons/nest.png",
  "https://cdn-icons-png.flaticon.com/512/226/226777.png",
];

function createParticles(containerId, imageSrc) {
  particlesJS(containerId, {
    particles: {
      number: { value: 10 },
      shape: {
        type: "image",
        image: {
          src: imageSrc,
          width: 100,
          height: 100,
        },
      },
      opacity: { value: 0.5 },
      size: { value: 15 },
      line_linked: { enable: false },
      move: { enable: true, speed: 1 },
    },
  });
}
createParticles("particles-js-1", images[0]);
createParticles("particles-js-2", images[1]);
createParticles("particles-js-3", images[2]);
createParticles("particles-js-4", images[3]);
createParticles("particles-js-5", images[4]);
createParticles("particles-js-6", images[5]);
createParticles("particles-js-7", images[6]);
