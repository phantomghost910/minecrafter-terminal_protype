var open = document.getElementById('terminal_container')
var caine_folder = document.getElementById('caine')



function terminal(){
    console.log('click op terminal');
    open.setAttribute( 'class', 'terminal_open' );

}
function closing(){
    open.removeAttribute( 'class', 'terminal_open' );
}
