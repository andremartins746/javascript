function gerarNumerosEntre (min, max) {
    if(min > max) {
        [max, min] = [min, max] //destructing
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio) // o resolve retorna o valor final de uma promise
    })
}


gerarNumerosEntre(1, 60) 
    .then(num => num * 10)
    .then(numx10 => `o numero gerado foi ${numx10}`)
    .then(console.log)