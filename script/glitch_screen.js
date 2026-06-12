// In dit bestand vindt u alle functies/werkingen voor de glitchende scherm.


let icoontjescontainer = document.getElementById("icons");

// Alle icoontjes die in orde worden vertoond (gegroepde elementen worden tegelijkertijd vertoond)
let firsticon_caine = document.getElementById("caine_3");
let firsticon_bubble = document.getElementById("bubble_3");

let secondoneicons_caine = document.getElementById("caine_1");
let secondtwoicons_caine = document.getElementById("caine_2");
let secondoneicons_bubble = document.getElementById("bubble_2");
let secondtwoicons_bubble = document.getElementById("bubble_3");
let secondthreeicons_bubble = document.getElementById("bubble_1");

let thirdoneicons_caine = document.getElementById("caine_5");
let thirdsecondicons_caine = document.getElementById("bubble_4");

let fourthicon_caine = document.getElementById("caine_4");


// Functie vertonen icoontjes
setTimeout(function() {
    firsticon_caine.style.display = 'block';
    firsticon_bubble.style.display = 'block';
}, 300)

setTimeout(function() {
    secondoneicons_caine.style.display = 'block';
    secondtwoicons_caine.style.display = 'block';

    secondoneicons_bubble.style.display = 'block';
    secondtwoicons_bubble.style.display = 'block';
    secondthreeicons_bubble.style.display = 'block';
}, 700)

setTimeout(function() {
    thirdoneicons_caine.style.display = 'block';
    thirdsecondicons_caine.style.display = 'block';
}, 1200)

setTimeout(function() {
    fourthicon_caine.style.display = 'block';
}, 1500)