// herança com Classes

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // O extends serve comoo __proto__ ele referencia o pai como prototypo de Avo.
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('silva')
    }
}

const filho = new Filho
console.log(filho)