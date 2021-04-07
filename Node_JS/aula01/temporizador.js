const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 1', function() { // aqui ele ira na execultar este codigo nas segundas feiras as 11  da manhan
    console.log('Execultando tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel() // o cancel() é para para  a execulção do schedule.job()
    console.log("cancelando tarefa 1!")
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 11

regra.second = 30 

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Execultando tarefa 2!', new Date().getSeconds())
})