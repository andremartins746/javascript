// novo recurso es2015
const pessoa ={
    nome:'Ana',
    idade:5,
    endereco:{
        logradouro:'peroba',
        numero:1000
    }

}

const { nome, idade} = pessoa // tire de dentro do objeto o nome e idade do objeto pessoa

console.log(nome,idade)

const { nome: n, idade:i} = pessoa//atribuindo apelidos 
console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome,bemHumorada)

const { endereco: { logradouro,numero, cep}}=pessoa
console.log(logradouro,numero,cep)