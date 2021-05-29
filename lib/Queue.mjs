/*
    ESTRUTURAS DE DADOS FILA

    - Pilha é uma lista linear de acesso restrito, que permite operações de enfileiramento (enqueue) e desinfileiramento (dequeue), a primeira ocorrendo no final da estrutura
    e a segunda no ínicio da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, Fist Out - primeiro a entrar, primeiro a sair)
    - A principal aplicação das filas são tarefas que evolvem o processamento de tarefas por ordem de chegada.
*/
export class Queue {
    #data

    constructor() {
        this.#data = [] // Vetor vazio
    }

    // Inserção na fila (enfileiramento)
    enqueue(val) {
        this.#data.push(val)
    }

    // Remoção da fila (desenfileiramento)
    dequeue() {
        return this.#data.shift()
    }

    // "Espiadinha" (no início, que será o próximo a ser atendido)
    peek() {
        return this.#data[0]
    }

    // Verifica quando a fila está vazia
    get empty() {
        return this.#data.length === 0
    }

    // Para vermos o que tem dentro da estrutura
    print() {
        return JSON.stringify(this.#data) // Stringify irá transformar os valores em string para que possamos ver a posição e o valor
    }
}