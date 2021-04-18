//esta função retorna uma promise
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout( () => resolve(), tempo)
    })
}

/* esperarPor(2000)
    .then(() => console.log('execultando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('execultando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('execultando promise 3...'))

*/

function retornaValor() {
    return new Promise(resolve => resolve(10)) 
}

async function execultar() {

    let valor = await retornaValor() // o await só funciona em uma função que retorna uma promise

    await esperarPor(1500) // ele só vai execultar a proxima linha depois de ter execultado a promise 
    console.log(`async/await ${valor}...`)

    await esperarPor(1500) // ele espera essa linha ser execultada para partir para a proxiama linha
    console.log(`async/await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`async/await ${valor + 2}...`)

    return valor + 3 
}


async function execultarDeVerdade() {
   let valor = await execultar()
   console.log(valor)
}
execultarDeVerdade()




