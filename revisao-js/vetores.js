// Métodos de remoção de elemento em Vetores

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

// Métodos de inserir elementos nos Vetores

// Inserindo no final do vetor
frutas.push('amora')    // Pode inserir mais de um elemento ao mesmo tempo Ex: frutas.push('amora', 'jaca')
console.log(frutas)

// Inserir no inicio do vetor
frutas.unshift('jabuticaba')    // Pode inserir mais de um elemento ao mesmo tempo Ex: frutas.push('jabuticaba', 'jaca')
console.log(frutas)

//Inserir elementos no meio do vetor
//Parâmetro do splice() para inserção
// 1º posição para inserção
// 2º nº de elementos a serem excluídos(para inserção, usa-se 0)
// 3º elemento(s) que será(ão) inserdio(s)
frutas.splice(2, 0,'pêssego') // Pode inserir vários elementos ao mesmo tempo ex: Frutas.splice(2,0, 'pessêgo', 'jaca', 'nectarina')
console.log(frutas)

// Usando slice() para substituição
//Parâmetros:
// 1º posição para substituuição
// 2º quantidade de elementos que serão excluídos (para substituição,1)
// 3º o elemento será incluído no lugar
frutas.splice(4, 1, 'ameixa')
console.log(frutas)

// Inserção múltipla com slice()
frutas.splice(1,0,'nectarina', 'jaca')
console.log(frutas)

console.log('--------------------------------------------------------------------------------------------------------------------------------------')

//Percuso de Vetores
 
// 1) Percurso com for tradicional
// a) A contagem começa em Zero (0 - primeiro elemento)
// b) Ocorre enquanto o contador for Menor que o número de elementos do vetor
// c) Lenght termina com th
// d) É o método mais flexivel pois, se necessário, é possível um percurso parcial(começar em algum elemnto qu enão é o primerio e terminar antes do final)
for(let i = 0; i < frutas.length; i ++) {
    console.log(i, frutas[i])
}

console.log('--------------------------------------------------------------------------------------------------------------------------------------')

// 2) For tradicional, em ordem inversa
// a) O contador inicia-se em length - 1
// b) A condição é contador MAIOR ou IGUAL a zero (0 - primeiro elemento)
for(let i = frutas.length -1 ; i >=0 ; i --)    {
    console.log(i, frutas[i])
}

// 3) Percurso com for..of
// a) Sempre percorre o vetor inteiro, na ordem natural, sem necessida de uma variável contadora
// b) Variáveis:
// f -> variável que receberá cada elemento do vetor (pode ser qualquer nome válido de variável)
// frutas -> é o vetor a ser percorrido

//let x = 0
for(let f of frutas)    {
    console.log(f)
    //console.log(x,f)
    //x++
}

console.log('--------------------------------------------------------------------------------------------------------------------------------------')
// 4) Percurso com forEach()
// forEach() receb como parâmetro uma função que recebe como parâmetro cada elemento do vetor
// O nome do parâmetro da função pode ser qualwer nome válido de identificar
frutas.forEach(function(elemento)  {
    console.log(elemento)
})
console.log('--------------------------------------------------------------------------------------------------------------------------------------')

// O mesmo forEach(), usando uma aqrow function como parâmetro
frutas.forEach(elemento => console.log(elemento))
