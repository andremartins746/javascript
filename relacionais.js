// === este sinal significa estritamente diferente ele considera o tipo do dado.
// == este sinal significa tal valor é igual a tal valor, ele nao considera o tipo
// != este sinal de diferente  significa tal valor é diferente a tal valor, ele nao considera o tipo
// !== este sinal de estritamente diferente  significa tal valor é diferente a tal valor, ele considera o tipo


console.log('01)', '1'==1)//aqui ele mostra o seguinte '1' é igual a 1 sem considerar o tipo.
console.log('02)', '1'===1)//aqui ele mostra o seguinte '1' é estritamente igual a 1 consiferando o tipo de cada um deles.
console.log('03)', '3'!=3)//aqui ele mostra o seguinte '3' é  diferente de 3.aqui vai dar false pq eles sao iguais, aqui ele nao considera o tipo
console.log('04)', '3'!==3)//aqui ele mostra o seguinte'3' é estritamente diferente de 3. aqui ele da true pq sim eles sao diferentes por conta do seus tipos.

console.log('05)',3 < 2)
console.log('06)',3 > 2)
console.log('07)',3<=2)
console.log('08)',3>=2)

const d1= new Date(0)
const d2 = new Date(0)
//esses abaixo vão dar false pq ele compara o endereço de memoria
console.log('09)', d1===d2)//d1 é estritamente igual a d2
console.log('10)',d1==d2)//d1 é igual a d2 

//esses de baixo vao dar true pq ele usa o .gettime ai ele estara comparando os milisegundo que é do tipo number
console.log('11)',d1.getTime()===d2.getTime())
console.log('11)',d1.getTime()==d2.getTime())

console.log('12)', undefined==null)
console.log('13)',null===undefined)
