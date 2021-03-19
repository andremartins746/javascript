const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//asincrona...
fs.readFile(caminho,'utf-8', (err, conteudo) => {
    const confg = JSON.parse(conteudo)
    console.log(`${confg.db.host}: ${confg.db.port}`)
})

const confg = require('./arquivo.json')
console.log(confg.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log("consteudo da pasta...")
    console.log(arquivos)
})