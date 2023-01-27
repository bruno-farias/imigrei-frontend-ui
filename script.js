var submenu = document.querySelector('.submenu')
var subactive = document.querySelector('.subactive')

var hamburguer = document.querySelector('.hamburguer')
var navMenu = document.querySelector('.nav-menu')
var links = document.querySelectorAll('.nav-item')

/*
//Header - SubMenu
submenu.addEventListener('click', () => {
  subactive.classList.toggle('subactive')
})*/

//Header - SubMenu - Hamburguer
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active')
  navMenu.classList.toggle('active')
})

for (i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    navMenu.classList.remove('active')
    hamburguer.classList.toggle('active')
  }
}
