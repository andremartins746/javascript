const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
    
})

aprovados.forEach(nome => console.log(nome))


const ExibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(ExibirAprovados)