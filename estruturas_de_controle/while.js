function InteiroAleatorioEntre (min , max) {
    const valor = Math.random() * (max - min) + min //random() serve para sortear um numero.
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = InteiroAleatorioEntre(-1, 10)
    console.log(`opção escolhida foi ${opcao}.`)
}

console.log('ate a proxima')

