//1.1 Inserta dinamicamente en un html un div vacio con javascript.
let div = document.createElement('div');
document.body.appendChild(div);

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let div1_2 = document.createElement('div');
let div1_2p = document.createElement('p');
div1_2.appendChild(div1_2p);
div1_2p.innerHTML = 'Soy un párrafo dentro de un texto!';

document.body.appendChild(div1_2);

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
//	loop con javascript.
let div1_3 = document.createElement('div');
for (let a = 1; a < 7; a++) {
   let p = document.createElement('p');
   p.innerHTML = 'Párrafo número ' + a;
   div1_3.appendChild(p);
}

document.body.appendChild(div1_3);

//1.4 Inserta dinamicamente con javascript en un html una p con el
//	texto 'Soy dinámico!'.
let p1_4 = document.createElement('p');
p1_4.innerHTML = 'Soy dinámico!';

document.body.appendChild(p1_4);

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector('h2.fn-insert-here');
h2.innerHTML = 'Wubba Lubba dub dub';

//1.6 Basandote en el siguiente array crea una lista ul > li con
//los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul = document.createElement('ul');

for (let app of apps) {
   let li = document.createElement('li');
   li.innerHTML = app;
   ul.appendChild(li);
}

document.body.appendChild(ul);

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let removeItems = document.querySelectorAll('.fn-remove-me');
console.log(removeItems);
for (let item of removeItems) {
   document.body.removeChild(item); //Los borra todos pero da error al final?
}

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.
let p1_8 = document.createElement('p');
p1_8.innerText = 'Voy en medio!';

//div1_2 es el primer div que he creado antes
div1_2.insertAdjacentElement('afterend', p1_8);

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//	.fn-insert-here

let insertDivs = document.querySelectorAll('div.fn-insert-here');
for (let a = 0; a < insertDivs.length; a++) {
   let p1_9 = document.createElement('p');
   p1_9.innerText = 'Voy dentro!';
   console.log('dentro');
   insertDivs[a].appendChild(p1_9);
}
