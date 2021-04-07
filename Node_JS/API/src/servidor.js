const porta = 3003
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bancoDeDados = require('./banco_de_dados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos',(req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req,res,next) => {  // function midleewares
    const produto = bancoDeDados.salvar_produto({
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// JSON send() retorna um JSON
})

app.listen(porta,() =>  {
    console.log(`servidor esta execultando na porta ${porta}`)
})
