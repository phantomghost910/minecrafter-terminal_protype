let icoontjes_container = document.querySelector(".icoontjes_container");


// Hoofscherm array \/ \/
let hoofdscherm_appsfolders = {
    "My Computer": "app",
    "Network Neighborhood": "app",
    "Inbox": "app",
    "Recycle Bin": "app",
    "My Briefcase": "folder"
}
/* ^^ Hoofdscherm apps/folders en icoontjes_container horen samen te werken. */

/* Functie om apps en folders toe te voegen \/ \/ \/
    (naam is voor de naam van de bestand,
    image is het url van de icoontje)*/ 
function addFolderApp(naam, image) {
        let icoontje_template = document.createElement("div");
        let icoontje = document.createElement("div");
        let icoontje_afbeelding = document.createElement("img");
        let icoontje_text = document.createElement("div");

        icoontje_template.className += "icoontje_template";
        icoontje.className += "icoontje";
        icoontje_text.className += "icoontje_text";
        icoontje_afbeelding.src = image;

        icoontjes_container.appendChild(icoontje_template);
        icoontje_template.appendChild(icoontje);
        icoontje.appendChild(icoontje_afbeelding);
        icoontje_template.appendChild(icoontje_text);

        icoontje_text.innerHTML = naam;
        icoontje_template.onclick = warning
}

document.getElementById("warning")
function warning(){
    alert("can't load windows.apps(error code=432)")
}


// Hier worden alle namen in de hoofdscherm array gecheckt en toegevoegd volgens de naam. \/ \/ \/
for (let key in hoofdscherm_appsfolders) {
    if (key == "My Computer") {
        console.log("my computer files goed ingesteld (verander dit later in js)");
        addFolderApp("My Computer", "images/app_template.png");
    }

    if (key == "Network Neighborhood") {
        console.log("network neighborhood files goed ingesteld (verander dit later in js)");
        addFolderApp("Network Neighborhood", "images/app_template.png");
    }

    if (key == "Inbox") {
        console.log("Inbox files goed ingesteld (verander dit later in js)");
        addFolderApp("Inbox", "images/app_template.png");
    }

    if (key == "Recycle Bin") {
        console.log("Recycle bin files goed ingesteld (verander dit later in js)");
        addFolderApp("Recycle Bin", "images/app_template.png");
    }

    if (key == "My Briefcase") {
        console.log("My briefcase files goed ingesteld (verander dit later in js)");
        addFolderApp("My Briefcase", "images/folder_template.png");
    }
}