function gerarValor(min, max, tempo) {
   
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
        
    })
}

async function getValor() {
    let valor = await gerarValor(100,120,2000)
    
    await gerarValor(100,120,2000)
    console.log('ola1')
    await gerarValor(10,12,2000)
    console.log('ola2')
    await gerarValor(1,10,2000)
    console.log('ola3')


    return console.log(valor)
}

getValor()
