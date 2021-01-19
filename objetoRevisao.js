//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
//deletando um elemento de um obj
delete produto.preco['marca do produto']
console.log(produto)




const carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'rua ABC',
            numer: 123
        }
    },
    condutores:[{
        nome: 'junior',
        idade: 19
    }, {
        nome:'Ana',
        idade: 42
    }],
    calculaValorSeguro: function() {
        // ...
    }
}

carro.propietario.endereco.numero = 1000
carro['propietario']['endereco']['logradouro'] = 'AV gigante'
console.log(carro)

// delete carro.condutores
delete carro.propietario.endereco
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)


