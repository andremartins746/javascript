{
    {
        {
            {
                var sera ='sera???'//exemplo de uma variavel global
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123//esta variavel só esta visivel aqui dentro. ela nao é global
    console.log(local)
}

teste()

console.lod(local) // aqui eu nao consigo chamar a variavel local de dentro da função pq a variavel só esta visivel dentro da function* ela nao é uma variavel global.