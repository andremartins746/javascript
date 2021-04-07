// ESB: Object.Values/Object.entries
const obj = { a:1, b:2, c:3 }
console.log(Object.values(obj))
console.log(Object.entries(obj)) // retorna uma matriz onde cada chave e valor o obj é um arrey


// melhorias na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola() {
        return 'oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())


// classe
class animal {}
class cachorro extends animal {
    falar(){
        return 'au au!'
    }
}

console.log(new cachorro().falar())