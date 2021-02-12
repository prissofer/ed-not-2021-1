let frutas = ['maça', 'laranja', 'pera', 'uva', 'mamão', 'banana']

//vetor original 
console.log(frutas)

// Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

// Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

// Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária
// 1º parâmetro -> a posição de remoção (contagem começa em 0)
// 2º parâmetro -> a quantidade de elementos a remover

let terceiraFruta = frutas.splice(2, 1) // SEMPRE retornará um elemento dentro de um vetor, 
// porque ele pode retirar mais de um elemento e para isso deve ser colocado dentro do vetor.

console.log(frutas)
console.log(terceiraFruta)