const navEL = document.querySelector('.nav');
const hamburgerEL = document.querySelector('.hamburger');

hamburgerEL.addEventListener('click', () => {
    navEL.classList.toggle("nav--open") //this nakes sure it tucks out.   toggle zorgt ervoor dat het ook weer weg gaat
    hamburgerEL.classList.toggle("hamburger--open")
});