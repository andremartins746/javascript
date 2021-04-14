
function primeiroElemento(arrey) {
    return arrey[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()


let p = new Promise(function(resolve) { // a promise recebe uma function como parametro
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']) // posso pasar um {} tbm um []
}) 


p 
    .then(primeiroElemento) // apartir das procimas chamadas do .then() vai ser somente a ana, pq eu peguei o valor no indice [0]
    .then(primeiraLetra) // pegando a primeira letra de .then() acima, no caso o A
    .then(letraMinuscula)
    .then(console.log) // aqui ele vai mostrar no console o resultado dos .then() acima  
    .catch(e => console.log(e))


/* p.then(function (valor) {  // o .then() serve para retornar a promessa "ele retorna o valor da promise"
    console.table(valor) // ele recebe uma functon como parametro para retorna o valor
})
*/
