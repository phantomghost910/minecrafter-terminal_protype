let appProgramList = document.querySelector(".folderprogram_container");

let folderomgeving = document.querySelector(".folder_omgeving");
let current_location = document.querySelector(".welkeomgeving_text");
let folder_name = document.querySelector(".folder_location");

// Functie om folders of programma's in een bepaalde folderomgeving te zetten
function addFolderProgram(text, url){
    let container = document.createElement("div");
    container.classList += 'folder-program';
    container.id = text;
    container.setAttribute('onclick', 'bar()');

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
        addFolderProgram("Calc.exe", "images/placeholder.png");
        addFolderProgram("Carved Stone.bmp", "images/placeholder.png");
        addFolderProgram("Cdplayer.exe", "images/placeholder.png");
        addFolderProgram("Charmap.exe", "images/placeholder.png");
        addFolderProgram("Circles.bmp", "images/placeholder.png");
        addFolderProgram("Clouds.bmp", "images/placeholder.png");
        addFolderProgram("Command.com", "images/placeholder.png");
        addFolderProgram("Confidential!", "images/placeholder.png");
        addFolderProgram("Config", "images/placeholder.png");
        addFolderProgram("Control", "images/placeholder.png");
        addFolderProgram("Ctpnp.cfg", "images/placeholder.png");
        addFolderProgram("Dblbuff.sys", "images/placeholder.png");
        addFolderProgram("Defrag", "images/placeholder.png");
        addFolderProgram("Desktop", "images/placeholder.png");
        addFolderProgram("Dialer", "images/placeholder.png");
        addFolderProgram("Directcc", "images/placeholder.png");
        addFolderProgram("Display", "images/placeholder.png");
        addFolderProgram("Document", "images/placeholder.png");
        addFolderProgram("Dosprompt", "images/placeholder.png");
        addFolderProgram("Drvspace", "images/placeholder.png");
        addFolderProgram("Emm386", "images/placeholder.png");
        addFolderProgram("Explorer", "images/placeholder.png");
        addFolderProgram("Expostrt", "images/placeholder.png");
        addFolderProgram("Extra", "images/placeholder.png");
        addFolderProgram("Extrac32", "images/placeholder.png");
        addFolderProgram("Faq", "images/placeholder.png");
        addFolderProgram("Fax", "images/placeholder.png");
        addFolderProgram("Faxcover", "images/placeholder.png");
        addFolderProgram("Filexfer", "images/placeholder.png");
        addFolderProgram("Fontview", "images/placeholder.png");
        addFolderProgram("For your information", "images/placeholder.png");
        addFolderProgram("Forest", "images/placeholder.png");
        addFolderProgram("Freecell", "images/placeholder.png");
        addFolderProgram("frontpg", "images/placeholder.png");
        addFolderProgram("Games", "images/placeholder.png");
        addFolderProgram("General", "images/placeholder.png");
        addFolderProgram("Generic", "images/placeholder.png");
        addFolderProgram("Gold Weave", "images/placeholder.png");
        addFolderProgram("Grpconv", "images/placeholder.png");
        addFolderProgram("Hardware", "images/placeholder.png");
        addFolderProgram("Himem.sys", "images/placeholder.png");
        addFolderProgram("Houndstooth", "images/placeholder.png");
        addFolderProgram("Ifshlp.sys", "images/placeholder.png");
        addFolderProgram("Infrared", "images/placeholder.png");
        addFolderProgram("Internet Mail", "images/placeholder.png");
        addFolderProgram("Internet News", "images/placeholder.png");
        addFolderProgram("Internet", "images/placeholder.png");
        addFolderProgram("Internet", "images/placeholder.png");
        addFolderProgram("los", "images/placeholder.png");
        addFolderProgram("IsUninst", "images/placeholder.png");
        addFolderProgram("Jview", "images/placeholder.png");
        addFolderProgram("Logos.sys", "images/placeholder.png");
        addFolderProgram("Logow.syst", "images/placeholder.png");
        addFolderProgram("Main", "images/placeholder.png");
        addFolderProgram("Metal Links", "images/placeholder.png");
        addFolderProgram("Moricons.dll", "images/placeholder.png");
        addFolderProgram("Mouse", "images/placeholder.png");
        addFolderProgram("Mplayer", "images/placeholder.png");
        addFolderProgram("Msdosdrv", "images/placeholder.png");
        addFolderProgram("Mshearts", "images/placeholder.png");
        addFolderProgram("Msmail", "images/placeholder.png");
        addFolderProgram("Msn", "images/placeholder.png");
        addFolderProgram("Msoffice", "images/placeholder.png");
        addFolderProgram("Multimed", "images/placeholder.png");
        addFolderProgram("Nddapi.dll", "images/placeholder.png");
        addFolderProgram("Nddenb.dll", "images/placeholder.png");
        addFolderProgram("Ndislog", "images/placeholder.png");
        addFolderProgram("Net", "images/placeholder.png");
        addFolderProgram("Net", "images/placeholder.png");
        addFolderProgram("Netdde", "images/placeholder.png");
        addFolderProgram("Netdet", "images/placeholder.png");
        addFolderProgram("Neth", "images/placeholder.png");
        addFolderProgram("Netwatch", "images/placeholder.png");
        addFolderProgram("Network", "images/placeholder.png");
        addFolderProgram("Networks", "images/placeholder.png");
        addFolderProgram("Notepad", "images/placeholder.png");
        addFolderProgram("Online1", "images/placeholder.png");
        addFolderProgram("Onlinese", "images/placeholder.png");
        addFolderProgram("Packager", "images/placeholder.png");
        addFolderProgram("Pbrush", "images/placeholder.png");
        addFolderProgram("Pinstripe", "images/placeholder.png");
        addFolderProgram("Powerpnt", "images/placeholder.png");
        addFolderProgram("Printers", "images/placeholder.png");
        addFolderProgram("Progman", "images/placeholder.png");
        addFolderProgram("Progman", "images/placeholder.png");
        addFolderProgram("Programs", "images/placeholder.png");
        addFolderProgram("Programs", "images/placeholder.png");
        addFolderProgram("Protocol", "images/placeholder.png");
        addFolderProgram("Protocol", "images/placeholder.png");
        addFolderProgram("Pws", "images/placeholder.png");
        addFolderProgram("Qfecheck", "images/placeholder.png");
        addFolderProgram("Qtw", "images/placeholder.png");
        addFolderProgram("Ramdrive.sys", "images/placeholder.png");
        addFolderProgram("Readme", "images/placeholder.png");
        addFolderProgram("Red Blocks", "images/placeholder.png");
        addFolderProgram("Regedit", "images/placeholder.png");
        addFolderProgram("Rsrcmtr", "images/placeholder.png");
        addFolderProgram("Rundll", "images/placeholder.png");
        addFolderProgram("Rundll32", "images/placeholder.png");
        addFolderProgram("Sandstone", "images/placeholder.png");
        addFolderProgram("Scandskw", "images/placeholder.png");
        addFolderProgram("Script", "images/placeholder.png");
        addFolderProgram("Services", "images/placeholder.png");
        addFolderProgram("Setup", "images/placeholder.png");
        addFolderProgram("setup.old", "images/placeholder.png");
        addFolderProgram("Setupslt", "images/placeholder.png");
        addFolderProgram("Setver", "images/placeholder.png");
        addFolderProgram("ShelllconCache", "images/placeholder.png");
        addFolderProgram("Smartdrv", "images/placeholder.png");
        addFolderProgram("Sndrec32", "images/placeholder.png");
        addFolderProgram("Sndvol32", "images/placeholder.png");
        addFolderProgram("Sol", "images/placeholder.png");
        addFolderProgram("Stitches", "images/placeholder.png");
        addFolderProgram("Straw Mat", "images/placeholder.png");
        addFolderProgram("Support", "images/placeholder.png");
        addFolderProgram("Symson", "images/placeholder.png");
        addFolderProgram("System.cb", "images/placeholder.png");
        addFolderProgram("System.da0", "images/placeholder.png");
        addFolderProgram("System.dat", "images/placeholder.png");
        addFolderProgram("System", "images/placeholder.png");
        addFolderProgram("Systemto", "images/placeholder.png");
        addFolderProgram("Taskman", "images/placeholder.png");
        addFolderProgram("Telephon", "images/placeholder.png");
        addFolderProgram("Tiles", "images/placeholder.png");
        addFolderProgram("Tips", "images/placeholder.png");
        addFolderProgram("Tour", "images/placeholder.png");
        addFolderProgram("Triangles", "images/placeholder.png");
        addFolderProgram("ttfCache", "images/placeholder.png");
        addFolderProgram("Twain.dll", "images/placeholder.png");
        addFolderProgram("Twain_32.dll", "images/placeholder.png");
        addFolderProgram("Twunk_16", "images/placeholder.png");
        addFolderProgram("Twunk_32", "images/placeholder.png");
        addFolderProgram("uninst", "images/placeholder.png");
        addFolderProgram("Urgent!", "images/placeholder.png");
        addFolderProgram("User.da0", "images/placeholder.png");
        addFolderProgram("User.dat", "images/placeholder.png");
        addFolderProgram("Wabmig", "images/placeholder.png");
        addFolderProgram("Wangimg", "images/placeholder.png");
        addFolderProgram("Wavemix", "images/placeholder.png");
        addFolderProgram("Waves", "images/placeholder.png");
        addFolderProgram("CAndA", "images/placeholder.png");
        addFolderProgram("CAndA", "images/placeholder.png");
        addFolderProgram("CAndA386.swp", "images/placeholder.png");
        addFolderProgram("CAndA91e5.tmp", "images/placeholder.png");
        addFolderProgram("CaineAndAbel9.pwl", "images/placeholder.png");
        addFolderProgram("CAndAfile", "images/placeholder.png");
        addFolderProgram("CAndAhelp", "images/placeholder.png");
        addFolderProgram("CAndAhlp32", "images/placeholder.png");
        addFolderProgram("CAndAinit.bak", "images/placeholder.png");
        addFolderProgram("CandAinit", "images/placeholder.png");
        addFolderProgram("CAndAmine", "images/placeholder.png");
        addFolderProgram("CAndApopup", "images/placeholder.png");
        addFolderProgram("CAndAsock.dll", "images/placeholder.png");
        addFolderProgram("CAndA.oldd", "images/placeholder.png");
        addFolderProgram("CAndAver", "images/placeholder.png");
        addFolderProgram("Write", "images/placeholder.png");

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
    }
}

function deleteInside() {
    let deleteElement = document.querySelector(".folder-program");
    appProgramList.removeChild(deleteElement);
}

function bar() {
    window.alert("can't load windows.apps(error code=432)");
    let caine_folder = document.getElementById("CAINE");
    caine_folder.setAttribute('onclick', 'terminal()');
    caine_folder.removeAttribute('onclick', 'bar()');
}