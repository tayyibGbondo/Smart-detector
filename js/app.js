//DOM ELEMENTS
const toggleButton = document.querySelector('.toggle-btn'),
nav = document.querySelector('.nav-links'),
logo = document.querySelector('.logo');

toggleButton.addEventListener('click', event => {
  nav.classList.toggle('is-active')
  logo.classList.toggle('rem')
})

