let arrayColores = ['blue', 'blue', 'red', 'red', 'yellow', 'yellow', 'green', 'green', 'purple', 'purple', 'orange', 'orange'];

function prepararJuego(){
    let $cuadros = document.querySelectorAll(".cuadro");
    setearColores($cuadros);
    mostrarColores($cuadros);

}

function setearColores($cuadros){
    while(arrayColores.length > 0){
        let pos = posicionAleatoria(arrayColores.length);
        let color = arrayColores[pos];
        arrayColores.splice(pos, 1);
        $cuadros[arrayColores.length].style.backgroundColor = color;
    }
}

function posicionAleatoria(max){
    return Math.floor((Math.random() * max));
}

function mostrarColores($cuadros){

    setTimeout(function(){
        $cuadros.forEach(element => {
            element.style.opacity = "1";
        }); 
    }, 500);

    setTimeout(function(){
        $cuadros.forEach(element => {
            element.style.opacity = "0";
        }); 
    }, 2000);
}

prepararJuego();

