let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');


btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu');
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu');
})
overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu');
})

window.sr = ScrollReveal({reset: true });

sr.reveal('.especialidades',{duration:4000});
sr.reveal('.sobre',{duration:4000});
sr.reveal('.portifolio',{duration:4000});