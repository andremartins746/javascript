const [a] =[10] // O A recebeu o valor 10//antes de sinal = eu estou desestruturando um arrey e depois do sinal eu estou aatribuindo um valor para o arrey
console.log(a)

const [n1, ,n3, ,n5,n6=0] =[10, 7,9,8]//n1,n3,n4,n5 sao variaveis(ele é um arrey) e os valores em seguida sao os seus valores
console.log(n1,n3,n5,n6)

const [,[,nota]]=[[,8,8],[9,6,8]]//antes de sinal = eu estou desestruturando um arrey e depois do sinal eu estou aatribuindo um valor para o arrey
console.log(nota)
