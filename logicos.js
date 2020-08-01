function compras(trabalho1, trabalho2){
    const comprarSorvete=trabalho1 || trabalho2// o || significa (ou) entao os um tem que ser treu para ele ser execultado
    const comprarTv50=trabalho1 && trabalho2// o && significa (e) entao os 2 tem que ser treu para ele ser execultado
    //const comprarTv32 = !!(trabanho1 ^ trabalho2) //bitwise
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete//operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/*
esses são o operador &&
V e V -> V
V e F -> F 
F e ? -> F

esses são o operador ||
V ou ? -> V
F ou V -> V
F ou F -> F

esses são o operador XOR que é o ouExclusivo
V xor V -> F
V xor F -> V
F xor V -> V
F xor F -> F

tb temos as negações logicas
!V -> F
!F -> V
*/