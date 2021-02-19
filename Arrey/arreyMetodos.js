const pilotos = ['Vettel', 'alonso', 'raikkonem', 'massa']
pilotos.pop() //  remove o ultimo elemento do arrey
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no final do arrey
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do arrey
console.log(pilotos)

pilotos.unshift('hamilton') // adiciona o primeiro elemento do arrey
console.log(pilotos)


//spice pode adicionar e remover elemento

// adicionar
pilotos.splice(2,0, 'bottas', 'massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) 
console.log(pilotos)


const algunsPilotos = pilotos.slice(2) // cria um novo arrey apartir do indice que voce passar.
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1, 4) // gerando um arrey do indece 1 ate o indice 4
console.log(algunsPilotos1)
