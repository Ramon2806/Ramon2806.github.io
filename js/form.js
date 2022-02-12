const form = document.getElementsByTagName('form')[0];
const submitButton = document.getElementById("enviar");

const loadingIcon = document.createElement('i');
loadingIcon.classList.add("fa", "fa-spinner", "fa-spin");

form.addEventListener("submit", function(event){

    submitButton.textContent ="";
    submitButton.setAttribute("disabled", "");
    submitButton.appendChild(loadingIcon);
    console.log ("Enviando");
    event.preventDefault();
    
    setTimeout (function(){
        form.reset();
        submitButton.textContent= "Enviar";
        submitButton.removeAttribute("disabled");
 
    }, 2000);
});