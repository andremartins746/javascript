const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasBaixs1 = []

for(let i in notas) {
    if(notas[i] < 7){
        notasBaixs1.push(notas[i])// o push adiciona um elemento em um arrey
    }
}

console.log(notasBaixs1)



//com CallBack
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7)

console.log(notasBaixas3)

