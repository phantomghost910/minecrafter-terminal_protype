// In dit bestand vindt u alle functies/werkingen voor de glitchende scherm.

let body = document.querySelector("body");

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

// Alle glitchschermen die worden vertoond
let glitchscherm1 = document.getElementById("glitch_screen1");
let glitchscherm2 = document.getElementById("glitch_screen2");
let glitchscherm3 = document.getElementById("glitch_screen3");
let glitch_container = document.getElementById("glitch_screen")



// Functie om gehele glitch scherm te activeren (incl. icoontjes)
function activateGlitch() {

setTimeout(function() {
    firsticon_caine.style.display = 'block';
}, 300)

setTimeout(function() {
    firsticon_bubble.style.display = 'block';
    bubbleAndCaineNoise()
}, 400)

setTimeout(function() {
    secondoneicons_bubble.style.display = 'block';
    bubbleAndCaineNoise()
}, 500)

setTimeout(function() {
    secondthreeicons_bubble.style.display = 'block';
    secondtwoicons_caine.style.display = 'block';
    secondoneicons_caine.style.display = 'block';
    bubbleAndCaineNoise()
}, 600)

setTimeout(function() {
    secondthreeicons_bubble.style.display = 'block';
    secondtwoicons_caine.style.display = 'block';
    secondoneicons_caine.style.display = 'block';
    bubbleAndCaineNoise()
}, 700)

setTimeout(function() {
    thirdsecondicons_caine.style.display = 'block';
    bubbleAndCaineNoise()
}, 800)

setTimeout(function() {
    thirdoneicons_caine.style.display = 'block';
    bubbleAndCaineNoise()
}, 900)

setTimeout(function() {
    fourthicon_caine.style.display = 'block';
    bubbleAndCaineNoise()
}, 1200)




let glitchscreen = setInterval(function(){

    glitchScreen();

}, 700)
}


// Functie om glitch scherm te activeren
function glitchScreen() {
    
    glitch_container.setAttribute('class', 'glitchshow')
    setTimeout(function() {
        glitchscherm1.style.display = 'block';
        glitchscherm2.style.display = 'none';
        glitchscherm3.style.display = 'none';
    }, 100)

    setTimeout(function() {
        glitchscherm1.style.display = 'none';
        glitchscherm2.style.display = 'none';
        glitchscherm3.style.display = 'none';
    }, 200)

    setTimeout(function() {
        glitchscherm1.style.display = 'none';
        glitchscherm2.style.display = 'none';
        glitchscherm3.style.display = 'block';
    }, 300)

    setTimeout(function() {
        glitchscherm1.style.display = 'none';
        glitchscherm2.style.display = 'block';
        glitchscherm3.style.display = 'none';
    }, 400)

    setTimeout(function() {
        glitchscherm1.style.display = 'block';
        glitchscherm2.style.display = 'none';
        glitchscherm3.style.display = 'none';
    }, 500)

    setTimeout(function() {
        glitchscherm1.style.display = 'none';
        glitchscherm2.style.display = 'none';
        glitchscherm3.style.display = 'none';
    }, 600)
} 

function bubbleAndCaineNoise() {
    let sound = document.createElement("audio");
    let source = document.createElement("source");
    source.src = 'sounds/caineAndBubblePopUp.mp3';
    sound.autoplay = 'true';
    
    body.appendChild(sound);
    sound.appendChild(source)
    console.log(sound);
}