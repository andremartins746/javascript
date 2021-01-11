// factory é simplesmente uma função que retorna um objeto
// factory === construtora

function pessoa() {
    return {
        nome: 'andré',
        idade: 18
    }
}
console.log(pessoa())