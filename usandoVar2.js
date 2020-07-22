//aviso fuja do escopo global
//ele ira imprimir o  duas vezes
var numero =1
{
    var numero =2
    console.log('dentro =', numero)
}
console.log('fora =',numero)