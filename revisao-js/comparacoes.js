// Números
let a = 10, b = 8, c = 10
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------------------------------------------')

// Strings
// Quando é feita comparação entre strings ele leva em consideração o valor atribuído pela tabela asc e lembrando que as letras acentuadas tem amior valor que as letras normais
a = 'Catifunda'
b = 'Felisbino'
c = 'Catifunda'
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------------------------------------------')

// Boooleanos
// True tem valor de 1 e false tem valor de 0 (zero).
a = true
b = false
c = true
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------------------------------------------')

// Vetores
// Comparação direts de vetores dão resultados inconsistentes, não é possíel comparar diretametne dois vetores,pois 
//ele compara onde estão os endereços de memória e não os valores que estão dentro do vetor.
a = [10, 20, 30, 40, 50]
b = [-3, -2, -1]
c = [10, 20, 30, 40, 50]
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('--------------------------------------------------------------')

//Objetos
// Objetos também não podem ser diretamente comparados entre si, isso terá consequencias quando estivermos fazendo algoritmos de busca e ordenação
a = {marca: 'Fiat', modelo: '147', ano: 1979}
b = {marca: 'Chevrolet', modelo: 'Chevette', ano: 1982}
c = {marca: 'Fiat', modelo: '147', ano: 1979}
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

// CONCLUSÂO: apenas os seguintes tipos de dados são doretamente comparáveis: booleanos, númros e strings.
// para fazer a comparação teremos que comparar elementos de vetores ou do objetos e não o vetor ou objeto completo
