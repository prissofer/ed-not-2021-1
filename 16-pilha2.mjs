import{ Stack } from './lib/Stack.mjs'

const texto = 'Socorram-me, subi no ônibus em Marrocos'  // Texto é um palindromo

const pilha = new Stack()

//Empilhamento
for(let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

console.log(pilha.print()) // printa o que o sistema está fazendo

let textoRev = ''

//Desempilhamento
while(! pilha.empty) {  // Enquando a pilha não estiver vazia
    textoRev += pilha.pop()
}
console.log(textoRev)
