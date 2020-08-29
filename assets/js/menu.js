export function toggleMenuMobile(event, close = false) {
  const menu = document.getElementById('menu-mobile');
  if (close) {
    return menu.classList.remove('active');
  }
  if (!menu.classList.contains('active')) {
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
}

export function upMenuFixed(width) {
  if (width <= 990) {
    return;
  }
  const menu = document.getElementById('header-fixed');
  const animation = menu.animate([
    { transform: `translateY(0)` },
    { transform: `translateY(-${menu.offsetHeight}px)` },
  ], {
    duration: 300,
    fill: 'forwards',
  })
  animation.play();
  animation.reverse();
}

export function initMenuMobile() {
  const target = document.querySelectorAll('[data-menu-mobile]');
  target.forEach(item => item.addEventListener('click', toggleMenuMobile));
}

export default class Menu {
  constructor({ desktop, mobile, targetMobile }) {
    this.desktop = document.getElementById(desktop);
    this.mobile = document.getElementById(mobile);
    this.targetMobile = document.querySelectorAll(targetMobile);
  }
  init() {
    this.initMenuMobile();
  }
  initMenuMobile() {
    if (!this.targetMobile) {
      throw new Error('The element target is undefined');
    }
    this.targetMobile
      .forEach(item => item.addEventListener('click', (e) => this.toggleMenuMobile(e)));
  }
  toggleMenuMobile(event, close = false) {
    const className = 'active';
    if (!this.mobile) {
      throw new Error('The element menu mobile is undefined');
    }
    if (close) {
      return this.mobile.classList.remove(className);
    }
    if (!this.mobile.classList.contains(className)) {
      this.mobile.classList.add(className);
    } else {
      this.mobile.classList.remove(className);
    }
  }
  animationDesktop(width) {
    if (!this.desktop) {
      throw new Error('The element desktop is undefined');
    }
    if (width <= 990) {
      return;
    }
    // const animation = this.desktop.animate([
    //   { transform: `translateY(0)` },
    //   { transform: `translateY(-${this.desktop.offsetHeight}px)` },
    // ], { duration: 300, fill: 'forwards', });
    // animation.pause();

    return {
      up: () => this.desktop.classList.add('animate-up'),
      down: () => this.desktop.classList.remove('animate-up')
    }
  }
}