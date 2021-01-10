const fabricantes = ["mercedes", "audi","BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

//o forEach() percorre um arrey, e para cada elemento do arrey ele aplica o que a função dada como paranmetro para ele faz.
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
