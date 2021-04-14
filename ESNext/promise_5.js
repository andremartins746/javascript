function funcionarOuNao(valor, chanceErr) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErr) {
            // aqui estamoos gerando um Erro
            reject('Ocorreu um Erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('testando', 0.9)
    .then(v => `Valor: ${v}`)
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`)) // tratando esseçoes Erros
    .then(() => console.log('fim'))