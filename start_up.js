let container = document.getElementById("start_up_container");
let inlog_container = document.getElementById("achtergrondblokker_inlogbar");

let bluescreen_startup = document.getElementById("blue_startup");
let startup_screen = document.getElementById("start_up");

function startup() {
    container.removeAttribute('onclick');
    let audio_startup = document.createElement("audio");
    audio_startup.src = 'sounds/startup.mp3';
    audio_startup.autoplay = 'true';

    bluescreen_startup.style.animationName = 'turnBlue';
    setInterval(function() {
        bluescreen_startup.style.animationName = 'turnBlue, continue';
    }, 200)

    setInterval (function() {
        startup_screen.style.animationName = 'continue';
        startup_screen.style.animationDuration = '3s';
    }, 9000)

    setInterval(function() {
        container.style.display = 'none';
    }, 12000)
}