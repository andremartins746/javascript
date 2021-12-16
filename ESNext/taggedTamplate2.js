function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
//atribuições das variaveis
const preco = 29.99
const precoParcela = 11.9
//exibindo no console
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)
