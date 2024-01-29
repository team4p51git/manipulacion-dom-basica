//Seleccionar una etiqueta del HTML desde JS
const h1 = document.querySelector('h1'); 
const input1 = document.querySelector('#calculo1'); /*selecciona un id */
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick(){
    /*Esta función calcula la suma de los dos inputs al hacer clic en el botón Calcular y 
    el resultado lo muestra en el id del párrafo p */
    const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
    /*consoleg.log(pResult.innerText);*/
    
}





