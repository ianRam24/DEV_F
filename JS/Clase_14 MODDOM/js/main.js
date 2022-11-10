const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav__links');
menu.addEventListener('click', showMenu);
function showMenu() {
  menu.classList.toggle('change');
  nav.classList.toggle('show-nav__links');
}
