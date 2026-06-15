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

let input = document.getElementById('input_station');

input.addEventListener('keypress', function(event) {
    
    let command = input.value;
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log('Command entered' + command);
            if (command === "rickroll" ){
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            console.log('rickroll');
        }
            if (command === i){

        }
            if (command === i){
            
        }
            if (command === i){
            
        }
            if (command === i){
            
        }


    }

});
