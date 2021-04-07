// O Set() não aceita repetição/não indexada

const times = new Set()

times.add('vasco')
times.add('são paulo').add('palmeiras').add('corintians')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size) // size() == tamanho do set()
console.log(times.has('Vasco')) // has() o elemento esta em size() "times"
console.log(times.has('vasco'))
times.delete('flamengo') // delete() excluir um atribulto
console.log(times.has('flamengo'))

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)