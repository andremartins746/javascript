// factory é simplesmente uma função que retorna um objeto
// factory === construtora

function criarProduto(nome, preco,) {
    return {
        nome: nome,
        idade: preco, 
        desconto: 0.1
    }
}
console.log(criarProduto('açucar',4.50))
console.log(criarProduto('aroz', 13.99))
