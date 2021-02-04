const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // pegar todas as chaves do objeto pesso.
console.log(Object.values(pessoa)) // pegar todos os valores do objeto pessoa.
console.log(Object.entries(pessoa)) // pega o obj e trasforma em um arrey onde cada chave e cada valor é um arrey.

Object.entries(pessoa).forEach( ([chave, valor]) => { // na [chave, valor] estou usando destruct para retirar o valor de denro do subArrey.
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNacimento', { //definindo uma propiedade de um obj, passando o nome do obj e o nome da propiedade.
    enumerable: true,
    writable:false,
    value: '01/01/2019'
}) 

pessoa.dataNacimento = '01/01/2017'
console.log(pessoa.dataNacimento)
console.log(Object.keys(pessoa))

// Object.assing (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b:2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // "concatenasão" de objs

console.log(obj)

//congelar um obj "imutavel".
Object.freeze(obj)
obj.c = 1234
console.log(obj)