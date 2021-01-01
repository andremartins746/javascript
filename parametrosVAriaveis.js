function soma(){
    let soma = 0
    //o argumentséum arrey nativo do for
    
    //que vc pode utilizalo por exemplo em uma soma
    for(i in arguments){
        soma += arguments[i]
    }
    
    return soma
}

//testes
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "teste"))
console.log(soma("a", "b", "c"))
