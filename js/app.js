const navbarMenu = document.getElementById('navbar-menu'),
    navbarToggle = document.getElementById('navbar-toggle'),
    navbarClose = document.getElementById('navbar-close')


if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.add('show-menu')
    })
}
if (navbarClose) {
    navbarClose.addEventListener('click', () => {
        navbarMenu.classList.remove('show-menu')
    })
}


/*------------auto-hide-navbar-----------*/

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("header").style.bottom = "0";
//     } else {
//         document.getElementById("header").style.bottom = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
// }

/*------------change-bg-navbar-----------*/

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*------------click-hide-menu------------*/

const navLink = document.querySelectorAll('.navbar__link')

function linkAction() {
    const navMenu = document.getElementById('navbar-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*-------------click-open-skills----------*/

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*---------------swipper-Js---------------*/

let swiper = new Swiper('.portofolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

/*---------------show-scroll--------------*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)