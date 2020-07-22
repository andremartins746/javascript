//neste codigo usando o let nós só coonseguimos escrever o i pelo o console.log de dentro do escopo for pq o let fica barrado pelos cochetes, diferente do var.
for(let i=0;i<10;i++){
    console.log(i)
}

console.log('i=',i)// esta linha de codigo vai dar um erro pq ele quer qu imprima o i sendo q o i só existe dentro do escopo acima.