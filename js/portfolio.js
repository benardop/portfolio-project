const buggerMenu = document.querySelector('#bugger-menu');
const ul = document.querySelector('nav ul');
// const navigation = document.querySelector('nav');
const btnClose = document.querySelector('#navbar');

const navigationLink = document.querySelectorAll('.nav-link');

buggerMenu.addEventListener('click', () => {
  ul.classList.toggle('show');
});

navigationLink.forEach((navLink) => navLink.addEventListener('click', () => {
  ul.classList.remove('remove');
}));

btnClose.addEventListener('click', () => {
  ul.classList.toggle('show');
});
