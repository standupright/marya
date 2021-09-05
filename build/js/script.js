const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const questionLine = document.querySelector('.header__question-line');
const burgerMenu = document.querySelector('.burger-menu');
const mainNav = document.querySelector('.main-nav');
const mainLogo = document.querySelector('.main-nav__main-logo');
const tel = document.querySelector('.main-nav__tel');
const categories = document.querySelector('.categories');
const controlsList = document.querySelector('.controls-list');
const siteNav = document.querySelector('.site-nav');
//const slider = document.querySelector('.slider');

const HEADER_FIXED = 'header--fixed';
const MAIN_NAV_FIXED = 'main-nav--fixed';
const SITE_NAV_FIXED = 'site-nav--fixed';
const MAIN_LOGO_FIXED = 'main-nav__main-logo--fixed';
const BURGER_MENU_FIXED = 'burger-menu--fixed';
const TEL_FIXED = 'main-nav__tel--fixed';
const CATEGORIES_FIXED = 'categories--fixed';
const CONTROLS_LIST_FIXED = 'controls-list--fixed';
const SHIFT = header.offsetHeight + questionLine.offsetHeight;

const OVERFLOW = 'overflow-hidden';
const body = document.querySelector('#body');
const burgerMenuToggle = document.querySelector('.burger-menu__toggle');
const burgerMenuInner = document.querySelector('.burger-menu__inner');
const burgerFooter = document.querySelector('.burger-footer');

const NAV_OPENED = 'nav--opened';
const HEADER_OPENED = 'header--opened';
const BURGER_MENU_OPENED = 'burger-menu--opened';
const MAIN_NAV_OPENED = 'main-nav--opened';
const SITE_NAV_OPENED = 'site-nav--opened';
const MAIN_LOGO_OPENED = 'main-nav__main-logo--opened';
const BURGER_MENU_INNER_OPENED = 'burger-menu__inner--opened';
const BURGER_FOOTER_OPENED = 'burger-footer--opened';

// nav open and closed
if (burgerMenuToggle) {
  burgerMenuToggle.addEventListener('click', () => {
    if (burgerMenu.classList.contains(BURGER_MENU_OPENED)) {
      burgerMenu.classList.remove(BURGER_MENU_OPENED);
      header.classList.remove(HEADER_OPENED);
      nav.classList.remove(NAV_OPENED);
      mainNav.classList.remove(MAIN_NAV_OPENED);
      siteNav.classList.remove(SITE_NAV_OPENED);
      mainLogo.classList.remove(MAIN_LOGO_OPENED);
      burgerMenuInner.classList.remove(BURGER_MENU_INNER_OPENED);
      burgerFooter.classList.remove(BURGER_FOOTER_OPENED);
      body.classList.remove(OVERFLOW);
    } else {
      burgerMenu.classList.add(BURGER_MENU_OPENED);
      header.classList.add(HEADER_OPENED);
      nav.classList.add(NAV_OPENED);
      mainNav.classList.add(MAIN_NAV_OPENED);
      siteNav.classList.add(SITE_NAV_OPENED);
      mainLogo.classList.add(MAIN_LOGO_OPENED);
      burgerMenuInner.classList.add(BURGER_MENU_INNER_OPENED);
      burgerFooter.classList.add(BURGER_FOOTER_OPENED);
      body.classList.add(OVERFLOW);
    }
  });
}


// scroll nav
window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;

  if (scrollDistance >= SHIFT) {
    header.classList.add(HEADER_FIXED);
    burgerMenu.classList.add(BURGER_MENU_FIXED);
    mainNav.classList.add(MAIN_NAV_FIXED);
    siteNav.classList.add(SITE_NAV_FIXED);
    mainLogo.classList.add(MAIN_LOGO_FIXED);
    tel.classList.add(TEL_FIXED);
    categories.classList.add(CATEGORIES_FIXED);
    controlsList.classList.add(CONTROLS_LIST_FIXED);
  } else {
    header.classList.remove(HEADER_FIXED);
    burgerMenu.classList.remove(BURGER_MENU_FIXED);
    mainNav.classList.remove(MAIN_NAV_FIXED);
    siteNav.classList.remove(SITE_NAV_FIXED);
    mainLogo.classList.remove(MAIN_LOGO_FIXED);
    tel.classList.remove(TEL_FIXED);
    categories.classList.remove(CATEGORIES_FIXED);
    controlsList.classList.remove(CONTROLS_LIST_FIXED);
  }
});

// slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  simulateTouch: false,
  // Default parameters
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    horizontalClass: '.swiper-pagination-custom',
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
});

const swiperBanners = new Swiper('', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  simulateTouch: false,
  // Default parameters
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
  controller: {
    control: swiper,
  },
});


const swiperMini = new Swiper('', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  simulateTouch: false,
  // Default parameters
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
  controller: {
    control: swiper,
  },
});
