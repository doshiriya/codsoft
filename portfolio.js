let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-bar');
scrollIndicator();

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar .classList.toggle('nav-toggle');
})

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.toggle('nav-toggle');
}

function scrollIndicator(){
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';
}