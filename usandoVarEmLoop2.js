const funcs =[]

for(var i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//para toda chamada que eu fizaer ela vai retornar o numero 10.
funcs[8]()//para toda chamada que eu fizaer ela vai retornar o numero 10.