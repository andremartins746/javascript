// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //não faça isso em casa
const avo ={ attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho ={ __proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro  = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 // shadowing == sombreaento!
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}` // o super tem a mesma funcionabilidade do .this, mas é para as funções/metodos
    }
}

// o primeiro parametro é o obj e o segundo é o pai deste obj
Object.setPrototypeOf(ferrari, carro) // O Object.setPrototypeOf() é a mesma coisa que o __proto__, ele serve para declarar um prototype para um obj.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

