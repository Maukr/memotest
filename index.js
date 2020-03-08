let $cuadros = document.querySelectorAll(".cuadro");
let $tablero = document.querySelector("#tablero");
let $primerCuadro = null;
let turnos = 0;
let $mensajeFinal = document.querySelector("#fin-juego");

function prepararJuego(){
    let arrayColores = ['blue','red','yellow','green','purple','orange'];
    let coloresRepetidos = arrayColores.concat(arrayColores);
    setearColores(coloresRepetidos);
    mostrarColores();
    setTimeout(function(){
        manejarEvento($tablero);
    },2500);
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


function manejarEvento($tablero){

    $tablero.onclick = function(e){
        const $elemento = e.target;
        if($elemento.classList.contains('cuadro')){ //Para saber si se le hizo click a un cuadro
            manejarClickCuadro($elemento);
        }
    };
}

function manejarClickCuadro($cuadroActual){
    mostrarCuadro($cuadroActual);

    if($primerCuadro === null){
        $primerCuadro = $cuadroActual;
    }else{
        if($primerCuadro === $cuadroActual){
            return; //si son literalmente el mismo cuadro sale (compara cuadros no colores)
        }
        turnos++;

        if(cuadrosSonIguales($primerCuadro, $cuadroActual)){
            eliminarCuadro($primerCuadro);
            eliminarCuadro($cuadroActual);
        }else{
            ocultarCuadro($primerCuadro);
            ocultarCuadro($cuadroActual);
        }
        $primerCuadro = null;
    }
}

function ocultarCuadro($cuadroActual){
    setTimeout(function(){
        $cuadroActual.style.opacity = "0";
    },500)
    
}
function mostrarCuadro($cuadroActual){
    $cuadroActual.style.opacity = "1";
}

function cuadrosSonIguales($primerCuadro, $cuadroActual){
    return $primerCuadro.style.backgroundColor === $cuadroActual.style.backgroundColor;
}

function eliminarCuadro($cuadroEliminar){
    setTimeout(function(){
        $cuadroEliminar.parentElement.classList.add('completo');
        $cuadroEliminar.remove();
        evaluarFinal();
    },500);
    
}

function evaluarFinal(){
    if(document.querySelectorAll('.cuadro').length === 0){
        $tablero.style.display = "none";
        $mensajeFinal.querySelector('strong').textContent = turnos.toString();
        $mensajeFinal.style.display = 'block';
    }
}

prepararJuego();


