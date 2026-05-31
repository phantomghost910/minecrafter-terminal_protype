/* Functie om startmenu open en dicht te doen
let start_bar = document.querySelector(".start");
let start_menu = document.getElementById("start_menu");

function openStartMenu(status) {
    if (status == 'open') {
        start_menu.style.display = "flex";
        start_bar.setAttribute('onclick', "openStartMenu('close')");
    }

    if (status == 'close') {
        start_menu.style.display = "none";
        start_bar.setAttribute('onclick', "openStartMenu('open')")
    }    
} */

let options = {
    Programs: {
        Accessories: "folder",
        "Online Services": "folder",
        StartUp: "folder",
        "Internet Explorer": "program",
        "C&A-CLI Prompt": "program",
        Email: "program",
        "OS Explorer": "os explorer"
    },
    Documents: {
        "abc": ""
    },
    Settings: "",
    Find: "",
    Help: "",
    Run: "",
    "Shut Down": "shut_down"
}

// Functie om startmenu tabs toe te voegen (en alvast de container van de extra tabs van de startmenu tabs)
for (let x in options) {
    

    let container = document.getElementById("startmenuappsfolders_container"); // Hier moeten alle opties in (bijv. Programs, StartUp, enz.)

    let option_container = document.createElement("div"); // Dit wordt gezamenlijk de optie
    option_container.className += `option_startmenu ${x}`;
    option_container.setAttribute("onclick", `revealExtraTabs('${x}')`);

    let option_iconcontainer = document.createElement("div"); // Icoontje optie container
    option_iconcontainer.className += "icoontje startmenu_icoontje";
    

    let option_icon = document.createElement("img"); // Icoontje optie

    option_icon.src = "images/folder_template.png"; // DIT BEWERKEN IN DE TOEKOMST!!

    let option_textcontainer = document.createElement("div"); // Text optie
    option_textcontainer.className += "startmenuoption_text";
    option_textcontainer.innerHTML = x;

    let option_arrow = document.createElement("div"); // Pijltje optie
    option_arrow.className += "arrow_startmenu";

    let container_extratabs = document.createElement("div"); // Extra tabs container (!!!)
    container_extratabs.className += "optionsextratab_container";
    container_extratabs.className += ` ${x}_extratabscontainer`; // !!!
    container_extratabs.style.display = "none";

    container.appendChild(option_container);
    option_container.appendChild(option_iconcontainer);
    option_iconcontainer.appendChild(option_icon);
    option_container.appendChild(option_textcontainer);
    option_container.appendChild(option_arrow);

    option_container.appendChild(container_extratabs);

    if (x == "Shut Down") {
        option_container.style.borderTop = "3px solid black";
    }
}

// Functie om tabs bij startmenu extra tabs te weergeven
function revealExtraTabs(status) {
    let startmenu_optie = document.querySelector(`.${status}`);
    console.log(startmenu_optie);

    startmenu_optie.setAttribute("onclick", `closeExtraTabs('${status}')`);

    let container_extratabs = document.querySelector(`.${status}_extratabscontainer`) // Extra tab container
    marginTopCount = -70

    

    for (let y in options[status]) {
        marginTopCount = marginTopCount + 49;

        let extra_tabs = document.createElement("div"); // Dit wordt gezamenlijk de extra tab
        extra_tabs.className += `options_extratab ${status}_extratab ${y}`
        extra_tabs.innerHTML = `${y}`
        extra_tabs.setAttribute('onclick', `test('${status}', '${y}')`);

        container_extratabs.style.display = "flex";
        container_extratabs.style.marginTop = marginTopCount + "px";
        container_extratabs.appendChild(extra_tabs);
    }


    let count_object = Object.keys(options[`${status}`]).length

    // console.log(Object.keys(options.Documents).length); !!!!!
    console.log(count_object);

    
    if (container_extratabs.childElementCount > count_object) {
        while (container_extratabs.childElementCount > count_object) {
            container_extratabs.removeChild(document.querySelector(`.${status}_extratab`));
    }
}
}

// Functie om tabs bij startmenu extra tabs te verstoppen
function closeExtraTabs(status) {
    let hide_element = document.querySelector(`.${status}_extratabscontainer`);
    hide_element.style.display = "none";

    let menuStart = document.querySelector(`.${status}`);
    menuStart.setAttribute("onclick", `revealExtraTabs('${status}')`);
}

function test(base, child_base) { // later bewerken
    console.log(base);
    console.log(child_base);

    if (options[base][child_base] == "program") {
        window.alert("can't load windows.apps(error code=432)");
    };

    if (options[base][child_base] == "folder") {
        window.alert("can't load windows.folders(error code=432)");
    };

    if (options[base][child_base] == "os explorer") {
        showFolderOmgeving('os explorer');
    };
}