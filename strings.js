const escola ="cod3r"

console.log(escola.charAt(4)) //a palavra .charAt serve para pegal uma letra dde uma palavra ou um unico numero de uma sequencia de numeros.
console.log(escola.charAt(5))// se nós mandamos o .charAt pegar uma letra que nao existe ele nao ira mostrar nada no terminal.
console.log(escola.charCodeAt(3))// seve para pegar o codigo do elemento "como se fosse a letra "B" em biinario.
console.log(escola.indexOf("3"))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('escola '.concat(escola).concat("!"))// o .concat serve para concatenar uma palavra com a outra ("ela junta por exemplo uma let com uma string").
console.log(escola.replace(3, "e"))//o .replace serve para substituir a letra ou numero pela letra que vc quiser...

console.log('ana, marta, pedro'.split(','))
