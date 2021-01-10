let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)//aqui ele esta se referenciando ao escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj)//aqui ele pasará como escopo ghlobal o obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)