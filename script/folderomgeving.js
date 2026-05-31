let appProgramList = document.querySelector(".folderprogram_container");

let folderomgeving = document.querySelector(".folder_omgeving");
let current_location = document.querySelector(".welkeomgeving_text");
let folder_name = document.querySelector(".folder_location");

// Functie om folders of programma's in een bepaalde folderomgeving te zetten
function addFolderProgram(text, url){
    let container = document.createElement("div");
    container.classList += 'folder-program';

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
    }

    if (name == 'canda_folder') {
        
    }
}

function deleteInside() {
    let deleteElement = document.querySelector(".folder-program");
    appProgramList.removeChild(deleteElement);
}