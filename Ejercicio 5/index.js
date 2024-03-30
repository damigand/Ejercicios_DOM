//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
//que imprima cada uno de los albums.
const albums = ['De Mysteriis Dom Sathanas', 'Reign of Blood', 'Ride the Lightning', 'Painkiller', 'Iron Fist'];
let ul = document.createElement('ul');
for (let index in albums) {
   let album = document.createElement('li');
   album.innerText = albums[index];
   ul.appendChild(album);
}

document.body.appendChild(ul);
