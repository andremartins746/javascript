//as chaves representa um object
const prod1 ={}
prod1.nome = 'celular ultra mega'//exemplo de criação dinamica de um objeto.
prod1.preco =4998.90
prod1['desconto legal'] = 0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome:'camisa polo',
    preco:79.90,
    obj: {
        blabla:1,
    }
}

console.log(prod2)


const nomes = {
    nome1:'maria de lurdes',
    numero:555555555,
    nome2: 'andre martins pereira',
    nome3: 'odair jose badu pereira'

}

console.log(nomes)