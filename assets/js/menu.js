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
    return {
      up: () => this.desktop.classList.add('animate-up'),
      down: () => this.desktop.classList.remove('animate-up')
    }
  }
}