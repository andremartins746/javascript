const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break //ele para no indice 5
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue //quando ele chegar no indice 5 ele nao ira mostrar o indice 5
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) { //rotulo__ não ussar esse tipo de codigo
    for (b in nums) {
        if (a ==2 && b == 3) break externo
        console.log(`par = ${a},${b}`)
    }
}

