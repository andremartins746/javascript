const pessoa = {
    saudacao: 'bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // aqui ele dara undefinid
falar() // consflito entre paradigma de : funcional e OO (programaçãoorientada a objetos)
const falarDePessoa = pessoa.falar.bild(pessoa) // aqui o bild() esta falando: olha vc quer pegar a função falar(), mas me passe como parametro de onde vc quer pegar!