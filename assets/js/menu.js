export function toggleMenuMobile(close = false) {
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