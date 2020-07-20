const peso1 = 1.0
const peso2 = Number("2.0")

console.log (peso1 + peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)


console.log (media.toFixed(2))  //.tofixed serve para ter o controle pelas casas decimais dos numeros quebrados por exemplo o numero 2,01252
console.log (media.toString(2))// esste 2 do toString serve para torna o resultado de media como binario
console.log(typeof media) //typeof serve pra mostrar o tipo de uma const "uma variavel", como por exeplo se ela é um Number ou uma string.

console.log(peso1 + peso2 )


