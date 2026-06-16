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
                check.setAttribute('class', 'check_1')
        }
            if (command === "" && check.contains("check_1")){
                check.removeAttribute('class', 'check_1')
                check.setAttribute('class', 'check_2')
        }
            if (command === "" && check.contains("check_2")){
                check.removeAttribute('class', 'check_2')
                check.setAttribute('class', 'check_3')
        }
            if (command === "" && check.contains("check_3")){
                check.removeAttribute('class')
        }
        else {
            console.log("warning not a command")
        }

    }

});
