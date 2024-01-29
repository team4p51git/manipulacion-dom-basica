//Seleccionar una etiqueta del HTML desde JS
const h1 = document.querySelector('h1'); 
//const p = document.querySelector('p');
//const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const input1 = document.querySelector('#calculo1'); /*selecciona un id */
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

/*h1.innerHTML = 'Patito <br> Bonito';*/
h1.innerText = 'Patito <br> Bonito';
console.log(h1.getAttribute('class')); /*imprime el atributo de una clase*/
h1.setAttribute('class', 'rojo');/*asigna el atributo a una clase*/

input.value = "456"; /*asigna el atributo de un elemento HTML que se convirtió en JS const input = document.querySelector('input');*/

/* console.log(document.createElement('img'));*/
const img = document.createElement('img');

img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);
/*pid.append(img);*/
pid.innerHTML = ""; /*Borra el contenido que tenga pid */
pid.appendChild(img);/*Inserta la imagen al contenedor HTML representado en JS por pid *
