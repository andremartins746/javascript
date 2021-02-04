// todo obj tem um __proto__ que é o seu pai
const ferrari = {
    modelo: 'f40',
    velMax:340,
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.prototype) // somentes as funções tem prototype.
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MueObjeto() {}
console.log(typeof Object, typeof MueObjeto)
console.log(Object.prototype, MueObjeto.prototype)