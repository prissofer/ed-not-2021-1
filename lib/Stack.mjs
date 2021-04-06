/*
    ESTRUTURAS DE DADOS PILHA

    - Pilha é uma lista lineat de acesso restrito, que permite operações de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last in, Dirst Out - Último a entrar, primeiro a sair).
    - A principal aplocação das pilhas são tarefas que evolvem a inversão de uma sequência de dados.
*/
export class Stack {

    #data

    constructor() {
        this.#data = []  // Irá inicializar um vetor vazio de metodos privados
    }
    // Inserção 
    push(val) {
        this.#data.push(val)
    }

    // Retirada
    pop() {
        return this.#data.pop()
    }
     //"Espiadinha": retorna o valor que está no topo da pilha (ultimo valor), mas sem retirá-lo de lá
     peek() {
         return this.#data[this.#data.length -1]
     }

    // A pilha está vazia (true/false) - PROPRIEDADE CALCULADA (só getter)
    get empty() {
        return this.#data.length === 0
    }
    print() {
        return JSON.stringify(this.#data)
    }
}
/* Testes
let pilha = new Stack()
pilha.push(5)
pilha.push(6)
pilha.push(0)
pilha.push(2)
console.log('Peek:', pilha.peek())
console.log(pilha.empty)
console.log(pilha.print())
let x = pilha.pop()
console.log('Pop:', pilha.peek())
console.log('Pop:', pilha.peek())
console.log(pilha.print())
*/

