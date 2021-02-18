class Lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome   // o this é o nome do atribulto que vc dar quando vc instacea o obj
        this.valor = valor
    }
}

class cicloFinaceiro {

    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }


    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado +=l.valor
        })

        return valorConsolidado
    }


}

const salario = new lancamento('salario', 45000)
const contaDeLuz = new lancamento('luz', -220)

const contas = new cicloFinaceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())