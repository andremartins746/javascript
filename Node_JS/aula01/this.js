const { functions } = require("lodash")

console.log(this ===  global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this == exports) // true

function logThis() {
    // dentro da função o this não aponta para o exports "que é um obj"
    console.log('dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // o this dentro de uma função no node aponta para o modulo global

}

logThis()