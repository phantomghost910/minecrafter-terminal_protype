// In dit bestand staan alle functies van de pop-ups.

let popup_cantopen = document.getElementById("popupbar_omgeving");
let alle_login = document.getElementById("achtergrondblokker_inlogbar");

function popupOpen(name) {
    if (name == 'cantopen') {
        popup_cantopen.style.display = 'block';
    }
}

function popupClose(name) {
    if (name == 'cantopen') {
        popup_cantopen.style.display = 'none';
    }

    if (name == 'inlog') {
        alle_login.style.display = 'none';
    }
}