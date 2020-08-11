function soBoaNoticia(nota){
    if (nota >=7) {
        console.log('aprovado com '.concat(nota))
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)


function seForVerdadeEuFalo(valor){
    if(valor) {
        console.log('È verdade....' .concat(valor))
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([11,22,33,44,55,66,77])
seForVerdadeEuFalo({})