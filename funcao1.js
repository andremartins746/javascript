//função sem retorno
function imprimirsoma(a, b){
    console.log(a + b)
}

imprimirsoma(2,3)
imprimirsoma(2)
imprimirsoma(2,10,4,5,6,7,8)
imprimirsoma()

//unção com retorno, onde a variavel b esta com um valor padradão

function soma(a,b=1) {
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())

//teste com as funções

function dividir(){
    let n1 = 10
    let n2 = 20
    return n1+n2 /2
}
console.log(dividir())