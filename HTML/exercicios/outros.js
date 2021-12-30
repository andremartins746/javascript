// Após isso, anexar o nó de texto ao elemento
var elem  = document.createElement("li");
var texto = document.createTextNode("mais um item");
elem.appendChild(texto);

// Recuperar o elemento lista e
// anexar o elemento <li> ao final de nossa lista <ul>
var lista = document.getElementsByTagName('ul')[0];
lista.appendChild(elem);
