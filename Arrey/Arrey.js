console.log(typeof Array, typeof new Array , typeof [] )

let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

aprovadoS = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
aprovados.push('abia')
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] == undefined)

console.log(aprovados)
aprovados.sort() // o sort() vai organizar todo o arrey aprovados de forma de a ate z
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1)// splice(indice, quantidade de elementos que vc quer excluir apartir do indice)
console.log(aprovados)

