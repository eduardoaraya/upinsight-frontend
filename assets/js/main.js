import Menu from './menu.js';
import ScrollEvent from './scroll.event.js';

// Menu init 
const menuConfig = new Menu({
  desktop: 'header-fixed',
  mobile: 'menu-mobile',
  targetMobile: '[data-menu-mobile]'
});
menuConfig.init();

const sizeDocument = document.body.scrollHeight;
const target = (sizeDocument - window.innerHeight);
ScrollEvent((menu) => {
  if (window.scrollY >= target) {
    menu.up();
  } else {
    menu.down();
  }
}, menuConfig.animationDesktop(window.innerWidth));


