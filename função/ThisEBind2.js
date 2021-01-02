function pessoa(){
    this.idade = 0
    //OBSERVAÇÂO: eles estão no mesmo escopo
    const self = this //serve para referenciar o this ao this.idade
    setInterval(function() { // o setInterval vai disparar um função no tempo de 1000 milisegundos ou seja ele vai mostrar algu de 1 em 1 segundo.(temporizador)
        self.idade++
        console.log(self.idade)
        
    }/*bild(this)*/, 1000) // o bild() serve para referenciar o this ao this.idade
}

new pessoa
