export class Stack {

    #data
    #tail // Cauda, fim da estrutura (topo, última posição)

    constructor() {
        this.#data= {}  // objeto vazio
        this.#tail = -1 // Pilha vazia
        //console.log(this.#data, this.#tail)
    }
    push(val) {
        this.#tail ++ 
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#tail)
    }
    pop() {

        // Se a pilha estiver vazia, já retorna undefined no inicio para evitar que #tail caia abaixo de -1
        if(this.empty) return undefined  // Verifica a posição
        let temp = this.#data[this.#tail] // Criamos variavél temporária com a última posição da pilha e armazenamos
        //console.temp({temp})
        delete this.#data[this.#tail]     // Deletamos a ultima posição da pilha
        this.#tail --                     // Decremetamos a pilha de 2 para 1
        //console.log(this.#data, this.#tail) 
        return temp                       // Retornamos a variável temp
    }

    peek() {
        return this.#data[this.#tail]
    }

    get empty() {
        return this.#tail === -1          // Ele vai retornar o valor da posição até -1 (objeto vazio) senão ele continua decrementar 
    }
    print() {
        return JSON.stringify(this.#data)
    }
}

/*let pilha = new Stack()

pilha.push('banana')
pilha.push('maça')
pilha.push('uva')*/