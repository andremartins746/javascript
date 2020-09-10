function sorteio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

opcao = -1
do {
    opcao = sorteio(-1, 10)
    console.log(`a opção escolhida foi ${opcao}`)
} while (opcao != -1) 
console.log('Até a proxima!!')