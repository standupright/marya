const NAV_CLOSED = 'nav--closed';
const NAV_NOJS = 'nav--nojs';
const NAV_OPENED = 'nav--opened';
const OVERFLOW = 'overflow-hidden';
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

// nav open and closed
if (nav) {
  nav.classList.remove(NAV_NOJS);
  nav.classList.add(NAV_CLOSED);
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (nav.classList.contains(NAV_CLOSED)) {
      nav.classList.remove(NAV_CLOSED);
      nav.classList.add(NAV_OPENED);
      body.classList.add(OVERFLOW);
    } else {
      nav.classList.add(NAV_CLOSED);
      nav.classList.remove(NAV_OPENED);
      body.classList.remove(OVERFLOW);
    }
  });
}
