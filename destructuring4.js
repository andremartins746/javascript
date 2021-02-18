function rand([min=0,max=1000]){
    if(min > max) [min , max] = [max , min]//aqui eu estou invertendo o lugar de min para max.
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))//aqui eu atribuir o valor de min e max 
console.log(rand([992]))//aqui eu passei só um valor, entao por padrao ele ira atribuir esse valor como o minimo que no caso seria 992 e 1000.
console.log(rand([,10]))//aqui eu iguinorei o primeiro valor e atribui o 10 para o segundo valor  entao ele ira ficar entre 0 e 10, min=0 e max=10.
console.log(rand([]));//aqi eu nao atribuir nenhum valor entao ele ira peegar os valores padrao que seria o min =0 e o max=1000.
