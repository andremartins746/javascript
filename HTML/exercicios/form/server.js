const express = require('express')
const app = express()
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({ extended: true})) // o body-parser server para que eu possa acessar os inputs apartir do req.body...

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>parabens! usuario incluido</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>parabens! usuario alterado</h1>')
})

app.listen(3003)
