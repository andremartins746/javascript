const obj = {a:1, b:2, c:3, soma() { return a+ b + c} }
console.log(JSON.stringify(obj)) // convertendo OBJ para JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) formato invalido de JSON
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) formato invalido de JSON
console.log(JSON.parse('{"a": 1, "b": 2, "C":3}'))
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))