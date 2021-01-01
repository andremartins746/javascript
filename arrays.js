const valores =[7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10// adicionando um valor no array
console.log(valores)
console.log(valores.length)// o length serve para falar/mostrar quanntos elementos vc tem no array.

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())// o pop serve para retirar do array o seu ultimo valor que neste caso foi a string teste.
delete valores[0] //delete serve para deletar um valordo array.
console.log(valores)

console.log(typeof valores)// em javascript o array é do tipo object. . . 
let ERRO

//tambem temos o .push
