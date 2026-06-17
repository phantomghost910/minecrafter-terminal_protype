let appProgramList = document.querySelector(".folderprogram_container");

let folderomgeving = document.querySelector(".folder_omgeving");
let current_location = document.querySelector(".welkeomgeving_text");
let folder_name = document.querySelector(".folder_location");

// Functie om folders of programma's in een bepaalde folderomgeving te zetten
function addFolderProgram(text, url){
    let container = document.createElement("div");
    container.classList += 'folder-program';
    container.id = text;
    container.setAttribute('onclick', "popupOpen('cantopen')");

    let icon_container = document.createElement("div");
    icon_container.classList = 'folderprogram_icon';

    let icon_img = document.createElement("img");
    icon_img.src = url;

    let appProgramText = document.createElement("div");
    appProgramText.className += "folderprogram_text";
    appProgramText.innerHTML = text;

    appProgramList.appendChild(container);
    container.appendChild(icon_container);
    icon_container.appendChild(icon_img);
    container.appendChild(appProgramText);
}

// Functie om folderomgevingen te weertonen
function showFolderOmgeving(name) {
    let howmanyDelete = appProgramList.childElementCount;
    console.log(howmanyDelete);

    for (let x = 0; x < howmanyDelete; x++) {
        deleteInside();
    }

    if (name == 'os explorer') {
        folderomgeving.style.display = "block";
        current_location.innerHTML = "(C:)"
        folder_name.innerHTML = "Exploring - C:\\";

        addFolderProgram('Acrobat3', 'images/placeholder.png');
        addFolderProgram('Aol30', 'images/placeholder.png');
        addFolderProgram('Corel', 'images/placeholder.png');
        addFolderProgram('Doscd', 'images/placeholder.png');
        addFolderProgram('downloads', 'images/placeholder.png');
        addFolderProgram('extracanda', 'images/placeholder.png');
        addFolderProgram('junk', 'images/placeholder.png');
        addFolderProgram('LI5', 'images/placeholder.png');
        addFolderProgram('Multimedia Files', 'images/placeholder.png');
        addFolderProgram('My Documents', 'images/placeholder.png');
        addFolderProgram('MyFiles', 'images/placeholder.png');
        addFolderProgram('naomi', 'images/placeholder.png');
        addFolderProgram('NatSpeak', 'images/placeholder.png');
        addFolderProgram('net', 'images/placeholder.png');
        addFolderProgram('Program Files', 'images/placeholder.png');
        addFolderProgram('Recycled', 'images/placeholder.png');
        addFolderProgram('Temp', 'images/placeholder.png');
        addFolderProgram('CANDA', 'https://thumbs.dreamstime.com/b/important-stamp-shows-critical-information-documents-25333429.jpg');
        addFolderProgram('Zoom', 'images/placeholder.png');
        addFolderProgram('autoexec.bat', 'images/placeholder.png');
        addFolderProgram('Bootlog.prv', 'images/placeholder.png');
        addFolderProgram('Bootlog.txt', 'images/placeholder.png');
        addFolderProgram('Command.com', 'images/placeholder.png');
        addFolderProgram('Config.sys', 'images/placeholder.png');
        addFolderProgram('Detlog.old', 'images/placeholder.png');
        addFolderProgram('Detlog.txt', 'images/placeholder.png');
        addFolderProgram('Drvspace.bin', 'images/placeholder.png');
        addFolderProgram('ExtraCANDA<br>OSNT.exe', 'images/placeholder.png');
        addFolderProgram('Faclog.txt', 'images/placeholder.png');
        addFolderProgram('ffastun.ffa', 'images/placeholder.png');
        addFolderProgram('ffastun.ffl', 'images/placeholder.png');
        addFolderProgram('ffastun.ffo', 'images/placeholder.png');
        addFolderProgram('ffastun0.ffx', 'images/placeholder.png');
        addFolderProgram('Frunlog.txt', 'images/placeholder.png');
        addFolderProgram('lo.sys', 'images/placeholder.png');
        addFolderProgram('Logo.pls', 'images/placeholder.png');
        addFolderProgram('logo.sys', 'images/placeholder.png');
        addFolderProgram('Msdos.sys', 'images/placeholder.png');
        addFolderProgram('Resetlog.txt', 'images/placeholder.png');
        addFolderProgram('Scandisk.log', 'images/placeholder.png');
        addFolderProgram('Strtlogo.oem', 'images/placeholder.png');

        let canda_folder = document.getElementById("CANDA");
        canda_folder.setAttribute('onclick', 'showFolderOmgeving("canda_folder")');
    }

    if (name == 'canda_folder') {
        current_location.innerHTML = "CANDA"
        folder_name.innerHTML = "C:\\CANDA";

        addFolderProgram("Command", "images/placeholder.png");
        addFolderProgram("Config", "images/placeholder.png");
        addFolderProgram("Cookies", "images/placeholder.png");
        addFolderProgram("Cursors", "images/placeholder.png");
        addFolderProgram("Favorites", "images/placeholder.png");
        addFolderProgram("Characters", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem-important-red.svg/1280px-Emblem-important-red.svg.png?utm_source=meta.wikimedia.org&utm_campaign=index&utm_content=thumbnail.png");
        addFolderProgram("Forms", "images/placeholder.png");
        addFolderProgram("Help", "images/placeholder.png");
        addFolderProgram("History", "images/placeholder.png");
        addFolderProgram("Java", "images/placeholder.png");
        addFolderProgram("Media", "images/placeholder.png");
        addFolderProgram("Msapps", "images/placeholder.png");
        addFolderProgram("Msremote.sfs", "images/placeholder.png");
        addFolderProgram("Occache", "images/placeholder.png");
        addFolderProgram("Options", "images/placeholder.png");
        addFolderProgram("SendTo", "images/placeholder.png");
        addFolderProgram("Start Menu", "images/placeholder.png");
        addFolderProgram("System", "images/placeholder.png");
        addFolderProgram("Temp", "images/placeholder.png");
        addFolderProgram("Temporary Internet Files", "images/placeholder.png");
        addFolderProgram("Wordview", "images/placeholder.png");
        addFolderProgram("Accessor.grp", "images/placeholder.png");
        addFolderProgram("Accstat.exe", "images/placeholder.png");
        addFolderProgram("Addlfnpr.reg", "images/placeholder.png");
        addFolderProgram("Aharris.pwl", "images/placeholder.png");
        addFolderProgram("aharris.xlb", "images/placeholder.png");
        addFolderProgram("Arp.exe", "images/placeholder.png");
        addFolderProgram("Black Thatch.bmp", "images/placeholder.png");
        addFolderProgram("Blue Rivets.bmp", "images/placeholder.png");
        addFolderProgram("Bubbles.bmp", "images/placeholder.png");

        let characters_folder = document.getElementById("Characters");
        characters_folder.setAttribute("onclick", "showFolderOmgeving('characters_folder')");
    }

    if (name == 'characters_folder') {
        current_location.innerHTML = "Characters"
        folder_name.innerHTML = "C:\\CANDA\\Characters";

        addFolderProgram("AI", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem-important-red.svg/1280px-Emblem-important-red.svg.png?utm_source=meta.wikimedia.org&utm_campaign=index&utm_content=thumbnail");
        addFolderProgram("CA_NeuralScans (Obsolete)", "images/placeholder.png");

        let ai_folder = document.getElementById("AI");
        ai_folder.setAttribute('onclick', 'showFolderOmgeving("AI_folder")');
    }

    if (name == 'AI_folder') {
        current_location.innerHTML = "AI"
        folder_name.innerHTML = "C:\\CANDA\\Characters\\AI";

        addFolderProgram("???", "images/placeholder.png");
        addFolderProgram("CAINE", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem-important-red.svg/1280px-Emblem-important-red.svg.png?utm_source=meta.wikimedia.org&utm_campaign=index&utm_content=thumbnail");
        var caine_folder = document.getElementById('CAINE');
        caine_folder.removeAttribute("onclick", "popupOpen('cantopen')");
        caine_folder.setAttribute("onclick", "terminal()");
    }

}

function closeFolderOmgeving() {
    folderomgeving.style.display = 'none';
}

function deleteInside() {
    let deleteElement = document.querySelector(".folder-program");
    appProgramList.removeChild(deleteElement);
}

function bar() {
    window.alert("can't load windows.apps(error code=432)");

}