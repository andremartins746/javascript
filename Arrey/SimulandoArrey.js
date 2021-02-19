const quaseArrey = { 0: 'rafael', 1: 'ana', 2: 'bia'}
console.log(quaseArrey)
Object.defineProperty(quaseArrey, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArrey[0])

const meuArrey = [ 'rafael', 'ana', 'bia']
console.log(quaseArrey.toString(), meuArrey)