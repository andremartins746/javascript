function atribult(value) {
    if(value === 1){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            return resolve('ola mundo')
            },5000)
        })
    }if(value === 2){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            return resolve('fala galera blz')
            },5000)
        })
    }
    else {
        return reject((err,u) => console.log("ERRO 4004", err,u))
    }
        
}


async function getatribult() {
    const get = await atribult(2)
    return console.log(get.concat(' eu sou a função asysc!'))
}
getatribult()

const typess = ['andre', 18, 1.88]

const [idade] = typess.filter((e) => e == 1.88)
console.log(idade)
