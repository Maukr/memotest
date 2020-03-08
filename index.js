let $cuadros = document.querySelectorAll(".cuadro");
let $tablero = document.querySelector("#tablero");
let $primerCuadro = null;
let turnos = 0;
let $mensajeFinal = document.querySelector("#fin-juego");

function prepararJuego(){
    let $cuadros = document.querySelectorAll(".cuadro");
    setearColores($cuadros);
    bloquearInputUsuario($cuadros);
    mostrarColores($cuadros);

}

function setearColores(coloresRepetidos){
    const coloresRandom = coloresRepetidos.sort(function(){
        return 0.5 - Math.random();
    });

    coloresRepetidos.forEach(function(element, i){
        $cuadros[i].style.backgroundColor = element;
    });
}

function mostrarColores(){

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

function bloquearInputUsuario($cuadros){
    $cuadros.forEach(element => {
        element.onclick = function(){};
    });
}

prepararJuego();


