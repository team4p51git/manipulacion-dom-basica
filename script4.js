//Seleccionar una etiqueta del HTML desde JS
const h1 = document.querySelector('h1'); 
const input1 = document.querySelector('#calculo1'); /*selecciona un id */
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('form');

/*Agrega el evento que escucha un evento, los argumentos son evento, funcion esta ultima sin parentesis */
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    /*Esta función calcula la suma de los dos inputs al hacer clic en el botón Calcular y 
    el resultado lo muestra en el id del párrafo p */
    //console.log({event});
    //COMO ES UN FORMULARIO EL SIEMPRE TOMA EL ULTIMO BOTON PARA ENVIAR ALGO O HACER SUBMIT Y ESTO RECARGA
    //LA PAGINA IMPIDIENDO VER EL RESULTADO Y LA URL TERMINA EN INDEX4.HTML? POR ELLO SE ASIGNA
    //ESTE EVENTO PARA QUE NO LA RECARGUE PORQUE NO SE VA A ENVIAR NINGUN SUBMIT REALMENTE A OTRA URL
    event.preventDefault(); 
    const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
    /*consoleg.log(pResult.innerText);*/
    
}

//SI NO SE UTILIZA LA MANIPULACION DEL FORM SINO DEL BOTON NO SE RECARGARIA 
//LA PAGINA SI EN EL ATRIBUTO DEL NODO EN HTML DEL BOTON SE ASIGNA DE TIPO BUTTON Y 
//ASI QUITAR POR DEFECTO EL TYPE SUBMIT QUE TRAE EL ULTIMO BOTON DE UN FORM

