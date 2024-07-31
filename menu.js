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

sr.reveal('.topo-do-site',{duration:4000, distance:'200px',origin:'top'});
sr.reveal('.especialidades',{origin:'bottom',distance:'200px',duration:4000});
sr.reveal('.sobre',{duration:4000,distance:'200px', origin:'left'});
sr.reveal('.portifolio',{duration:4000},);
sr.reveal('.project',{duration:4000,distance:'200px',delay:500,origin:'left'});



const $html = document.querySelector('html')
const $modo = document.getElementById('trilho')



$modo.addEventListener('click',function(){
    $html.classList.toggle('light-mode')
    $modo.classList.toggle('light')
})