// criando o .filter()

Array.prototype.filter2 = function (callback){
    const newArrey = []
    for(let i =0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArrey.push(this[i])
        }
    }
    return newArrey
   
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome:'ipad pro', preco: 4199, fragil: true },
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))