
 let baraja = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora =0;

const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

const puntosHTML = document.querySelectorAll('small');

const crearBaraja = () => {
    //2C, 2D, 2H, 2S, 3C, 3D, 3H, 3S,

    for (let i = 0; i >= 10; i++) {
        for (let tipo of tipos) {
            baraja.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for(let esp of especiales) { 
            baraja.push(esp + tipo);
        }
    }
    baraja = _.shuffle(baraja);
    return baraja
}

crearBaraja();

const pedirCarta = () => {

    if ( baraja.length === 0) {
        slert("No hay más cartas");
    }

    const carta = baraja.pop();
    return carta;
}
//con substring corto una cadena de texto
const valorCarta = (miCarta) => {
    const  valor = miCarta.substring(0, miCarta.length - 1);
//isNaN me evalua si algo es o no un numero
    if( isNaN(valor) ) { if (valor ==='A'){return 11;} 
    else{return 10;}} else {return valor * 1;}

    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 :
     valor * 1;
}

const valorCarta =( carta )=> {

    const valor = carta.substring(0, carta.length - 1);


    return (isNaN(valor)) ? ( valor === 'A' ) ? 11 : 10 : valor*1
}

const turnoComputadora = (puntosMinimos) => {

    do {const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosJugador;
    
        const imgCarta = document.createElement('img');
    
        imgCarta.src = `cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos> 21){ break}
    

    } while (puntosComputadora<PuntosMinimos && puntosMinimos <= 21);

    setTimeout(() =>{
        if(puntosComputadora === puntosMinimos){ alert("Nadie gana");}
        else if (puntosMinimos >21) { alert("Computadora gana");}
        else if (puntosComputadora >21) { alert("Jugador gana");}
        else {alert("Computadora gana");}
    }, 100)
}

btnPedir.addEventListemer('click', () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');

    imgCarta.src = `cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) { console.log("Lo siento mucho, perdiste") 
    btnPedir.disabled = true;
btnDetener.disabled =true;
turnoComputadora (puntosJugador);
} else if (puntosJugador === 21){
    console.log("21, genial");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora (puntosJugador);
}
    
    //"cartas/5H.png"
});

btnDetener.addEventListener('click', ()=> { btnPedir.disabled = true;
btnDetener.disabled = true;
turnoComputadora(puntosJugador);})

btnNuevo.addEventListener ('click',()=> {
    baraja = [];
    baraja= crearBaraja();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnNuevo.disables = false;
    btnPedir.disabled = false;
});

