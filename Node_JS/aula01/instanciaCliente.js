// usando um obj e os obj fazem cache
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//usando uma factory 
const contadorC = require('./instanciaNova')() // os parenteses no final significa que eu estou chamando "invocando a arrow function criada na instanciaNova"
const contadorD = require('./instanciaNova')()


contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
