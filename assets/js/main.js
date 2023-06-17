/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(e => e.addEventListener('click', linkAction))

/*==================== HIDDEN SKILLS ====================*/
document.querySelector('.skills-load').addEventListener('click', function() {
    let hiddenElements = document.querySelectorAll('.hidden-skill');
    for (let i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].classList.remove('hidden');
      hiddenElements[i].style.display = 'block';
    }
    this.style.display = 'none';
});
  
/*==================== QUALIFICATION TABS ====================*/


/*==================== PROJECT MODAL ====================*/
const modalView = document.querySelectorAll('.project-modal');
const modalBtn = document.querySelectorAll('.project-read');
const modalClose = document.querySelectorAll('.modal-close');

let modal = function(modalClick){
    modalView[modalClick].classList.add('active-modal')
}

modalBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((close) => {
    close.addEventListener('click', () => {
        modalView.forEach((view) => {
            view.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".project-container", {
    slidesPerView: 1,
    spaceBetween: 340,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // attach callback here
    onSlideChangeEnd: function (swiperObj) {
        $('.swiper-container').css('scrollTop', '0');
    }
});

/*==================== TESTIMONIAL ====================*/
const container = document.querySelector('body');

window.addEventListener('scroll', () => {
  container.scrollTop = window.scrollY;
});

container.addEventListener('scroll', () => {
  window.scrollTo(0, container.scrollTop);
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header');

    // When the scroll is greater than 80vh, add the scroll-header class to the header tag
    if (nav) {
        if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
// Get the theme button element
const themeButton = document.getElementById('theme-button');
const icon = themeButton.classList;

// Check if there is a theme stored in local storage
const selectedTheme = localStorage.getItem('selected-theme');

// If there is a stored theme, apply it
if (selectedTheme) {
  document.body.classList.add(selectedTheme);

  // Change the icon based on the stored theme
  icon.remove(selectedTheme === 'dark-theme' ? 'fa-moon' : 'fa-sun');
  icon.add(selectedTheme === 'dark-theme' ? 'fa-sun' : 'fa-moon');
}

// Add an event listener to the theme button
themeButton.addEventListener('click', () => {
  // Toggle the 'dark-theme' class on the body element
  document.body.classList.toggle('dark-theme');

  // Check if the body has the 'dark-theme' class
  const isDark = document.body.classList.contains('dark-theme');

  // Change the icon based on the theme
  icon.remove(isDark ? 'fa-moon' : 'fa-sun');
  icon.add(isDark ? 'fa-sun' : 'fa-moon');

  // Store the theme in local storage
  localStorage.setItem('selected-theme', isDark ? 'dark-theme' : '');
});