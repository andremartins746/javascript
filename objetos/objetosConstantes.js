// pessoas -> 123 -> {...}
const pessoa = { nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'ana'}

Object.freeze(pessoa) // aqui eu congelei o obj pessoa ou seja não consigo mudar nenhum elemento deste obj


pessoa.nome = 'maria'
pessoa.end = 'rua ABC' 
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)