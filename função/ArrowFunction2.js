function pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
console.log(typeof idade)
new pessoa // aqui nós estamos instanciando o função pessoa (estamos criando ele!)

/*como aqui nós usamos uma arrow function não precisamosusar o bild() ou amarzenar 
o this em uma constante self, pelo fato que na arrow function o valor do this na varia.*/