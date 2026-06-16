// terminal open close
var open = document.getElementById('terminal_container')
var caine_folder = document.getElementById('caine')



function terminal(){
    open.setAttribute( 'class', 'terminal_open' );
}
function closing(){
    open.removeAttribute( 'class', 'terminal_open' );
}


// beging binnen terminal

var input = document.getElementById('input_station');
var write = document.getElementById("")
var check = document.getElementById("if_statement_check")


input.addEventListener('keypress', function(event) {
    
    let command = input.value;
    if (event.key === 'Enter') {
        event.preventDefault();
            if (command === "rickroll" ){
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            console.log('rickroll');
        }
            if (command === "systemctl root mount 'open'/kinger/ delete"){
                check.setAttribute('class', 'check1');
                console.log('check 0');

        }
            if (command === "systemctl stop WACKYTIME_LOCKOUT" && check.classList.contains("check1")){
                check.removeAttribute('class', 'check1');
                check.setAttribute('class', 'check2');
                console.log('check 1');
        }
            if (command === "./GreenGROUNDS --daemon --target=torment_injection &" && check.classList.contains("check2")){
                check.removeAttribute('class', 'check2');
                check.setAttribute('class', 'check3');
                console.log('check 2');
        }
            if (command === " -u kinger ./securitysweep_stealth" && check.classList.contains("check3")){
                check.removeAttribute('class', 'check3');
                console.log('check 3');
        }
        else {
            console.log("warning not a command")
        }

    }

});
