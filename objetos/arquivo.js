const nomes = ['andré', 'odair', 'luana', 'monique', 'davi']

// usando .foreach()
nomes.foreach((elemento) => console.log(elemento))

// usando .filter()
const nomes1 = nomes.filter((nome) => nome === 'davi')
console.log(nomes1)
