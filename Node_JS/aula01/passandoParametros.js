module.exports = function(...nomes) { // os 3 pontos serve para que eu possa passar quantos parametros eu quiser para esta function
    return nomes.map( nome => `boa semana ${nome}!`)
}