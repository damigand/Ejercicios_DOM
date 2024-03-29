//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let showMeButton = document.querySelector('.showme');
console.log(showMeButton);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let pilladoH1 = document.querySelector('#pillado');
console.log(pilladoH1);

//1.3 Usa querySelector para mostrar por consola todos los p
let allp = document.querySelectorAll('p');
console.log(allp);

//1.4 Usa querySelector para mostrar por consola todos los elementos con
//la clase.pokemon
let allPokemon = document.querySelectorAll('.pokemon');
console.log(allPokemon);

//1.5 Usa querySelector para mostrar por consola todos los elementos con
//el atributo data-function="testMe".
let testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data-function="testMe".
//let tercerPersonaje = document.querySelector('span[data-function="testMe"]:nth-child(3)') -> Solo funciona si los "span" están dentro de un "div"?
let tercerPersonaje = document.querySelectorAll('span[data-function="testMe"]')[2];
console.log(tercerPersonaje);
