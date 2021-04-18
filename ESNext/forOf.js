for(let letra of 'cod3r'){ // o for of percorre os valores
    console.log(letra)
}

const assuntoEcma = ['map', 'set','promise']

for(let i in assuntoEcma){ // o for in percorre os indices
    console.log(i)
}

for(let assunto of assuntoEcma){ // o for of percorre os valores
    console.log(assunto)
}

const assuntosMap = new Map([ // o for of percorre os valores
    ['map', {abordado: true}],
    ['set', {abordado: true}],
    ['promise', { abordado: false}]
])

for(let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let valor of assuntosMap.values()) {

    console.log(valor)
}

for (let [ ch, vl]  of assuntosMap.entries()){
    console.log(ch,vl)
}


const s = new Set(['a', 'b','c'])
for(let letra of s){
    console.log(letra)
}
