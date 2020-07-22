/*teste com as funções

const soma = function(a,b){
    console.log(a+b)
}
soma(5,5)

const dividir =(a,b)=> {
    return(a/b)
}
console.log(dividir(1,3).toFixed(2))

//função arrow
const ola =(a,b) =>{
    return (a+b)
}
console.log(ola(1,10))

function idade(a,b){
    console.log(a + b)
}
idade('andre',6)

function nome(a,b){
    return(a+b)
}
console.log(nome('luana',' davi'))


*/


//amarzenando uma função em uma variavel
const imprimirsoma = function(a,b){
    console.log(a+b)
}
imprimirsoma(2,3)

//amarzenando uma função arrow em uma variavel
const soma =(a,b) =>{
    return(a+b)

}
console.log(soma(2,3))


//retorno implicito
const subtracao =(a,b) => a-b
console.log(subtracao(7,7))

