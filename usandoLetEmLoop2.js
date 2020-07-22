const funcs =[]

for(let i=0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//pelo fato que usamos o let ele eri retornar o valor 2
funcs[8]()//pelo fato que usamos o let ele eri retornar o valor 8