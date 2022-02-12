
//Cambiar color flecha

const btnAtras = document.getElementById("atras");
const btnAlante = document.getElementById("alante");
const photo = document.getElementById("fotografia");

let elemento =0;

const listaFotos = ["justice", "arkham", "superman", "varios",
 "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", 
 "cat", "gafas", "league", "fondoVerde"];





btnAtras.addEventListener('mouseover', function(){
    this.setAttribute("src", "./images/iz-mouseover.png")
});

btnAtras.addEventListener('mouseout', function(){
    this.setAttribute("src", "./images/flecha-iz.png")
});




btnAlante.addEventListener('mouseover', function(){
    this.setAttribute("src", "./images/de-mouseover.png")
});

btnAlante.addEventListener('mouseout', function(){
    this.setAttribute("src", "./images/flecha-de.png")
});




btnAlante.addEventListener('click', function(){
    elemento++;

    if (elemento > 14)  elemento=0;
    
    photo.setAttribute ("src",`images-2/${listaFotos[elemento]}.jpg` )
});


btnAtras.addEventListener('click', function(){
    elemento--;

    if (elemento < 0) elemento=14;
    
    photo.setAttribute ("src",`images-2/${listaFotos[elemento]}.jpg` )
});

