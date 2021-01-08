let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
//retorno implicito 
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function (){
    return 'ola'
}

ola = () => 'ola' //retorno implicito
ola = _ => 'ola' //posui um parametro

console.log(ola())
