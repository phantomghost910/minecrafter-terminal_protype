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
    Documents: "",
    Settings: "",
    Find: "",
    Help: "",
    Run: "",
    "Shut Down": "shut_down"
}


let count = 0;
for (let x in options) {
    

    let container = document.getElementById("startmenuappsfolders_container"); // Hier moeten alle opties in (bijv. Programs, StartUp, enz.)

    let option_container = document.createElement("div"); // Dit wordt gezamenlijk de optie
    option_container.className += `option_startmenu tab${count}`;
    option_container.setAttribute("onclick", `revealExtraTabs('${x}')`);
    count++

    let option_iconcontainer = document.createElement("div"); // Icoontje optie container
    option_iconcontainer.className += "icoontje startmenu_icoontje";
    

    let option_icon = document.createElement("img"); // Icoontje optie

    option_icon.src = "images/folder_template.png"; // DIT BEWERKEN IN DE TOEKOMST!!

    let option_textcontainer = document.createElement("div"); // Text optie
    option_textcontainer.className += "startmenuoption_text";
    option_textcontainer.innerHTML = x;

    let option_arrow = document.createElement("div"); // Pijltje optie
    option_arrow.className += "arrow_startmenu";

    container.appendChild(option_container);
    option_container.appendChild(option_iconcontainer);
    option_iconcontainer.appendChild(option_icon);
    option_container.appendChild(option_textcontainer);
    option_container.appendChild(option_arrow);

    if (x == "Shut Down") {
        option_container.style.borderTop = "3px solid black";
    }
}

function revealExtraTabs(status) {

        let margin_topcount = -70; // NIET VERWIJDEREN. Belangrijk voor het bepalen van de hoogte van de extra tabs binnen startmenu.

        for (let y in options[`${status}`]) {

        let container_extratab = document.querySelector(".optionsextratab_container");
        
        let extra_tab = document.createElement("div");
        let extratab_icoontje = document.createElement("div");
        let extratab_naam = document.createElement("div");
        let extratab_pijltje = document.createElement("div");

        extra_tab.className += "options_extratab";
        
        extratab_icoontje.className += "optionsextratab_icoontje";
        extratab_naam.className += "optionsextratab_naam";
        extratab_naam.innerHTML = y;
        extratab_pijltje.className += "arrow_extratab";

        margin_topcount = margin_topcount + 49; // Telt hoeveel elementen binnen object zijn

        let container_startmenu = document.querySelector(".option_startmenu");
        container_extratab.style.display = "flex";

        container_startmenu.appendChild(container_extratab);
        container_extratab.appendChild(extra_tab); 
        extra_tab.appendChild(extratab_icoontje);
        extra_tab.appendChild(extratab_naam);
        extra_tab.appendChild(extratab_pijltje);
        container_extratab.style.marginTop = `${margin_topcount}px`

        container_startmenu.setAttribute("onclick", "test()");
    }
}

function test() {
    let delete_element = document.querySelector('.optionsextratab_container');
    delete_element.style.display = "none";
    let return_state = document.querySelector(".option_startmenu");
    return_state.setAttribute("onclick", "revealExtraTabs('Programs')");
}