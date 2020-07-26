//par nome valor
const saudacao ='opa' //constexto lexico 1

function exec(){
    const saudacao ='falla' //contexto lexico 2
    return saudacao
}

//objetos sao grupos alinhados do pares nome/valor
const clientes ={
    nome:'pedro',
    idade:32,
    endereco: {
        logradouro:'rua pereoba',
        numero:28
    }
}
console.log(saudacao)
console.log(exec())
console.log(clientes)