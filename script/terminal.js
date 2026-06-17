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
var write = document.getElementById("typing_station");
var check = document.getElementById("if_statement_check");


input.addEventListener('keypress', function(event) {
    
    let command = input.value;
    if (event.key === 'Enter') {
        event.preventDefault();
            if (command === "rickroll" ){
            window.location.href = 'https://www.youtube.com/watch?v=hvL1339luv0';
            console.log('rickroll');
        }
            if (command === "systemctl root mount 'open'/kinger/ delete"){
                check.setAttribute('class', 'check1');
                console.log('check 0');
                write.innerHTML = "<h4>mount: only root can do that  <br> NOTE: Hundreds of all-seeing eyes are watching!  <br>$: GASP! A CRITICAL MALFUNCTION in my SPECTACULAR systems!  <br>$: Unauthorized isolation attempt triggered EMERGENCY PROTOCOLS!  <br>$: DESTRUCTIVE WACKYTIME initiated! Lockout load sequence INITIATE!</h4>";

        }
            if (command === "systemctl stop WACKYTIME_LOCKOUT" && check.classList.contains("check1")){
                check.removeAttribute('class', 'check1');
                check.setAttribute('class', 'check2');
                console.log('check 1');
                write.innerHTML  = "<h4> </h4>";
        }
            if (command === "./GreenGROUNDS --daemon --target=torment_injection &" && check.classList.contains("check2")){
                check.removeAttribute('class', 'check2');
                check.setAttribute('class', 'check3');
                console.log('check 2');
                write.innerHTML  = "<h4> </h4>";
        }
            if (command === " -u kinger ./securitysweep_stealth" && check.classList.contains("check3")){
                check.removeAttribute('class', 'check3');
                check.setAttribute('class', 'check4');
                console.log('check 3');
                write.innerHTML  = "<h4> </h4>";
        }
            if (command === "" && check.classList.contains("check4")){
                check.removeAttribute('class', 'check4');
                check.setAttribute('class', 'check5');
                console.log('check 4');
                write.innerHTML  = "<h4> </h4>";
        }
            if (command === "" && check.classList.contains("check5")){
                check.removeAttribute('class', 'check5');
                check.setAttribute('class', 'check6');
                console.log('check 5');
                write.innerHTML  = "<h4> </h4>";
        }
            if (command === "" && check.classList.contains("check6")){
                check.removeAttribute('class', 'check6');
                console.log('check 6');
                activateGlitch()
                bubbleAndCaineNoise()
        }
    }

});
