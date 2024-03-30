//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor'];
let div = document.querySelector('div[data-function="printHere"]');

let ul = document.createElement('ul');
for (let a = 0; a < places.length; a++) {
   let li = document.createElement('li');
   li.innerText = places[a];
   ul.appendChild(li);
}

div.appendChild(ul);
