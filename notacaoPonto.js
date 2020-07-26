console.log(Math.ceil(6.1))//O Math.ceil serve para arredondar um numero para cima!!

const obj1 = {}
obj1.nome='bola' //adicioonei um novo elemento dentro do object,: o ponto serve para add ou maniputar um dado de dentro de um objeto.
console.log(obj1.nome)// mostre somente o nome de dentro do obj1: aviso: importante usar o '.'
 function Obj(nome){
     this.nome = nome // O this. serve para tornar um elemento publico. ele fica visivel fora deste escopo.{}
    this.exec = function(){
        console.log('Exec....')
    }
 }

 const obj2 = new Obj('cadeira')
 const obj3 = new Obj('mesa')
 console.log(obj2.nome)
 console.log(obj3.nome)
 obj3.exec()
 