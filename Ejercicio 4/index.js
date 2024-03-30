//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click
let btnToClick = document.querySelector('#btnToClick');
btnToClick.addEventListener('click', (event) => {
   console.log(console.log(event));
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
function showInput(element) {
   console.log(element.value);
}

let focusElement = document.querySelector('input.focus');
focusElement.addEventListener('focus', () => showInput(focusElement));

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let focusElements = document.querySelectorAll('input:not(.focus)'); //:not(.focus) porque .focus ya tiene el evento.
focusElements.forEach((x) => {
   x.addEventListener('focus', () => showInput(x));
});
