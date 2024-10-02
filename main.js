'use strict'
let menuElems = document.querySelectorAll('.menu__elem')

menuElems.forEach(menuElem=>{
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu__btn');

    menuElem.addEventListener('mouseenter',function(){
        submenu.classList.add('active');
        btn.classList.add('active');
    })
    menuElem.addEventListener('mouseleave',function(){
        submenu.classList.remove('active');
        btn.classList.remove('active');
    })
})

document.querySelector('.faq').addEventListener('click', function(event){
    let target = event.target.closest('.faq__item');
    if(!target) return;

    target.classList.toggle('active');
    let p = target.querySelector('p');

    if(target.classList.contains('active')){
        p.style.height = p.scrollHeight + 'px';
    }else{
        p.style.height = '';
    }
})

const phone = document.querySelector('.phone');

let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        phone.style.display = 'block';
    }
}, { threshold: 0.5 });

const b3 = document.getElementById('price');
observer.observe(b3);

let slideIndex = 1;

showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("card");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}