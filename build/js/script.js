// const NAV_CLOSED = 'nav--closed';
// const NAV_NOJS = 'nav--nojs';
// const NAV_OPENED = 'nav--opened';
// const OVERFLOW = 'overflow-hidden';
//const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const questionLine = document.querySelector('.header__question-line');
const burgerMenu = document.querySelector('.burger-menu');
const mainNav = document.querySelector('.main-nav');
const mainLogo = document.querySelector('.main-nav__main-logo');
const tel = document.querySelector('.main-nav__tel');
const categories = document.querySelector('.categories');
const controlsList = document.querySelector('.controls-list');
const siteNav = document.querySelector('.site-nav');
const slider = document.querySelector('.slider');

const HEADER_FIXED = 'header--fixed';
const MAIN_NAV_FIXED = 'main-nav--fixed';
const SITE_NAV_FIXED = 'site-nav--fixed';
const MAIN_LOGO_FIXED = 'main-nav__main-logo--fixed';
const BURGER_MENU_FIXED = 'burger-menu--fixed';
const TEL_FIXED = 'main-nav__tel--fixed';
const CATEGORIES_FIXED = 'categories--fixed';
const CONTROLS_LIST_FIXED = 'controls-list--fixed';
const SHIFT = header.offsetHeight + questionLine.offsetHeight;
// const navToggle = document.querySelector('.nav__toggle');

// // nav open and closed
// if (nav) {
//   nav.classList.remove(NAV_NOJS);
//   nav.classList.add(NAV_CLOSED);
// }

// if (navToggle) {
//   navToggle.addEventListener('click', () => {
//     if (nav.classList.contains(NAV_CLOSED)) {
//       nav.classList.remove(NAV_CLOSED);
//       nav.classList.add(NAV_OPENED); sads
//       body.classList.add(OVERFLOW);
//     } else {
//       nav.classList.add(NAV_CLOSED);
//       nav.classList.remove(NAV_OPENED);
//       body.classList.remove(OVERFLOW);
//     }
//   });
// }


// scroll nav
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

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
