import Menu from './menu.js';
import ScrollEvent from './scroll.event.js';

const menuConfig = new Menu({
  desktop: 'header-fixed',
  mobile: 'menu-mobile',
  targetMobile: '[data-menu-mobile]'
});
menuConfig.init();

const sizeDocument = document.body.scrollHeight;
const target = (sizeDocument - window.innerHeight) - 450;
ScrollEvent((menu) => {
  if (window.innerWidth < 1024) {
    return;
  }
  if (window.scrollY >= target) {
    menu.up();
  } else {
    menu.down();
  }
}, menuConfig.animationDesktop(window.innerWidth));


