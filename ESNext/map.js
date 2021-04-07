const tecnologia = new Map()
tecnologia.set('react', { fremework: false})
tecnologia.set('angular', { framework: true})

console.log(tecnologia.react)
console.log(tecnologia.get('react'))

const chavesVariadas = new Map([
    [function( ) { }, 'função'],
    [{}, 'objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)