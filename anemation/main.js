
let btnMobile = document.getElementById('btnMobile');
let viewMobile = document.getElementById('viewMobile');
let navbar = document.getElementById('navbar');

btnMobile.addEventListener('click', function () {
    navbar.classList.toggle('active');
    viewMobile.classList.toggle('active');
})

viewMobile.addEventListener('click', function () {
    navbar.classList.remove('active');
    viewMobile.classList.remove('active');
})

window.onload = function () {
    document.querySelector('.loading').classList.add('hide');
}

window.onscroll = function () {
    scrollHeader();
}


let header = document.getElementById('header');

let x = 0;

function scrollHeader() {
    if (window.pageYOffset > x) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
}

let links = document.querySelectorAll('a[href^="#"]');

links.forEach(links => {
    links.addEventListener('click', function (e) {
        e.preventDefault();
        let arrt = document.querySelector(this.getAttribute('href'));
        arrt.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
})

let wow = document.querySelectorAll('.wow');

let i = 0;

window.addEventListener('scroll', function () {
    for (i = 0; i < wow.length; i++) {
        if (wow[i].getBoundingClientRect().top < window.innerHeight - 100) {
            wow[i].classList.add('show');
        } else {
            wow[i].classList.remove('show');
        }
    }

})