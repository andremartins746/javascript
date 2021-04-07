// operador ...rest(juntar)/spread(espalhar)
// como usar rest com parametro de função

//usar spred com objetos
const funcionario = { nome: 'maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spred com arrey
const grupoA = ['joao', 'maria', 'gloria']
const grupoFinal = [ 'pedro', 'rafaela', ...grupoA]
console.log(grupoFinal)