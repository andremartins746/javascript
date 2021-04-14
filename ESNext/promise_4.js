function gerarNumerosEntre (min, max, tempo) {
    if(min > max) {
        [max, min] = [min, max] //destructing
    }

    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio) // o resolve retorna o valor final de uma promise
        }, tempo) 
    })
}


function gerarVariosNumeros() {
    return Promise.all([ // promise.all() ajunta todas as promises
        gerarNumerosEntre(1, 60, 4000), // retorna uma promise
        gerarNumerosEntre(1, 60, 500), // retorna uma promise
        gerarNumerosEntre(1, 60, 3000), // retorna uma promise
        gerarNumerosEntre(1, 60, 100), // retorna uma promise
        gerarNumerosEntre(1, 60, 1500), // retorna uma promise
    ])
}


console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })
