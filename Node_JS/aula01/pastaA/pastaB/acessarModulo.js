const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('../../node_modules/saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola)

/*
const http = require('http') // Modulo core, este modulo já vem como padrao no Node-JS
http.createServer((req, res) => {
    res.write("bom dia")
    res.end()
}).listen(8080)

*/