let options = {
    Programs: {
        Accessories: "",
        "Online Services": "",
        StartUp: "",
        "Internet Explorer": "",
        "C&A-CLI Prompt": "",
        Email: "",
        "OS Explorer": ""
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

function revealExtraTabs(status) {
    let container_extratabs = document.querySelector(`.${status}_extratabscontainer`) // Extra tab container
    marginTopCount = -70

    

    for (let y in options[status]) {
        marginTopCount = marginTopCount + 49;

        let extra_tabs = document.createElement("div"); // Dit wordt gezamenlijk de extra tab
        extra_tabs.className += "options_extratab"
        extra_tabs.innerHTML = `${y}`

        container_extratabs.style.display = "flex";
        container_extratabs.style.marginTop = marginTopCount + "px";
        container_extratabs.appendChild(extra_tabs);

        
    }


    let count_object = Object.keys(options).length;
    console.log(Object.keys(options).length);
    console.log(count_object);

    let startmenu_optie = document.querySelector(`.${status}`);
    startmenu_optie.setAttribute("onclick", `closeExtraTabs('${status}')`);

    
    if (container_extratabs.childElementCount > count_object) {
        while (container_extratabs.childElementCount > count_object) {
            container_extratabs.removeChild(document.querySelector('.options_extratab'));
    }
}
}

function closeExtraTabs(status) {
    let hide_element = document.querySelector(`.${status}_extratabscontainer`);
    hide_element.style.display = "none";

    let menuStart = document.querySelector(`.${status}`);
    menuStart.setAttribute("onclick", `revealExtraTabs('${status}')`);
}