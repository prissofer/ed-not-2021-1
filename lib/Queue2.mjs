/*
    ESTRUTURAS DE DADOS FILA

    - Pilha é uma lista linear de acesso restrito, que permite operações de enfileiramento (enqueue) e desinfileiramento (dequeue), a primeira ocorrendo no final da estrutura
    e a segunda no ínicio da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, Fist Out - primeiro a entrar, primeiro a sair)
    - A principal aplicação das filas são tarefas que evolvem o processamento de tarefas por ordem de chegada.
*/
export class Queue {

    #data
    #head // Início, posição inicial
    #tail // Cauda, fim da estrutura (topo)

    constructor() {
        this.#data = {}         // Objeto vazio (armazenamento)
        this.#head = 0          // Início da fila
        this.#tail = -1         // Final da fila
        //console.log(this.#data, this.#head, this.#tail)
    }

    // Insere o elemento na fila
    enqueue(val) {
        this.#tail++
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#head, this.#tail)
    }

    // Retira o elemento da fila
    dequeue() {
        // Se a fila já estiver vazia, retorna undefined para não afetar o posicionamento de #head
        if(this.empty) return undefined

        let temp = this.#data[this.#head]  // Salva o elemento no início da fila
        delete this.#data[this.#head]      // Apaga o elemento no início da fila
        this.#head++                       // Chega o início para a frente
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    // "Espiadinha no início da fila"
    peek() {
        return this.#data[this.#head]
    }

    get empty() {
        return this.#tail - this.#head + 1 === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}
/* TESTE 

IMPORTANTE! : As posicões não são reaproveitadas se o elemento na posição 0 for eliminado o proximo elemento não assume a posição 0,
se for inserido um novo elemento ele recebe a posição do proximo elemento, ou seja a posição 0 não é mais aproveitada.

let fila = new Queue()

fila.enqueue('Leila')
fila.enqueue('Adalberto')
fila.enqueue('Cleber')
fila.enqueue('Paula')

let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})

atendido = fila.dequeue()
console.log({atendido})

fila.enqueue('Yara')

fila.dequeue()
fila.dequeue()
fila.dequeue()

fila.enqueue('Ubiratan')*/
