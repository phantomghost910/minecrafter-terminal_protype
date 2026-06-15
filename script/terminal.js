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

let input = document.getElementById('typing_station');

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let command = input.value;
        event.preventDefault();
        console.log('Command entered');
        if 
    }
});