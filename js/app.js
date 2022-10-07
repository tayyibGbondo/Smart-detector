//DOM ELEMENTS
const toggleButton = document.querySelector('.toggle-btn'),
nav = document.querySelector('.nav-links'),
logo = document.querySelector('.logo'),
downloadButton = document.querySelector('.download-btn'),
popOver = document.querySelector('.popup'),
okButton = document.querySelector('.okButton');

toggleButton.addEventListener('click', event => {
  nav.classList.toggle('is-active')
  logo.classList.toggle('rem')
})


//the download button
downloadButton.addEventListener('click', event => {
  if(popOver.classList.contains('not-live')){
    popOver.classList.remove('not-live')
  }
})

//the ok button for the popup notifacation
// okButton.addEventListener('click', event => {
//   popOver.style.display = "none"
// })
function removePopUp(){
  popOver.classList.add('not-live')
}