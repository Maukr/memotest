let arrayColores = ['blue', 'blue', 'red', 'red', 'yellow', 'yellow', 'green', 'green', 'purple', 'purple', 'orange', 'orange'];

function prepararJuego(){
    let $cuadros = document.querySelectorAll(".cuadro");
    setearColores($cuadros);
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

prepararJuego();
