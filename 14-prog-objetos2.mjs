/*
    Uma classe pode ser comparada a uma forma de bolo. Assim como esse utensílio, a classe empresta algumas carecterísticas aos objetos que serão criados a partir
    dela, embora outras características dos objetos possam variar.
*/
// Por convenção nomes de classes em JS se iniciam com Letras Maiúsculas
class FormaGeometrica {

    //Declaração dos atributos privados deve ser feita antes do constructor mas dentro da classe
    #base
    #altura
    #tipo 

    // Uma classe pode conter funções. Mas, quando funções fazem parte de uma classe, elas são demominadas de MÉTODOS.
    // Um método especial é o constructor(). Ele é chamdo toda vez que se vai criar um novo objeto a partir da classe.
    // No constructot(), podem ser feitas validações que, ao falhar em Error. A existência de um ou mais Errors impede que o objeto seja criado.

    constructor(base, altura, tipo) {

        // Invocar os stters das propriedades, as validações serão feitas por lá
        this.base = base
        this.altura = altura
        this.tipo = tipo

    // base deve ser numérica e seu valor maior que zero
    if (isNaN(base) || base <= 0) throw new Error('A base deve ser númerica e sue valor maior que zero.')

    // altura deve ser numérica e seu valor maior que zero
    if(isNaN(altura) || altura <= 0) throw new Error('A altura deve ser númerica e sue valor maior que zero.')

    // if(tipo !== 'Q' && tipo !== 'T' && tipo !== 'E') -> segunda forma de escrever o algoritmo
    if(! ['Q', 'T', 'E'].includes(tipo)) throw new Error('O tipo deve ser Q, T ou E.')

    // se chagamos até aqui, podemos prosseguir com a criação do objeto.
    // No caso atual, precisamos armazenar as informaçãoes de base, altura e tipo em algum lugar, de modo que, ao sair do constructo(), essas informações não se percam.
    // Para tanto, armazenaremos essas informações em variáveis que pertencerão ao escopo do objeto criado  a partir da classe.
    // Essas variáveis especiais são denominadas ATRIBUTOS e diferenciam-se das variáveis comuns pela presença do prefixo this.

    // atributo recebe valor do parâmetro de mesmo nome
    /*
    // Atributos publicos: podem ser acessados e modificados também fora da classe
    this.base = base
    this.altura = altura
    this.tipo = tipo
    */

    // ATRIBUTOS PRIVADOS: só podem ser acessados e modificados dentro da classe, os atributos começam com uma cerquilia #
    this.#base = base
    this.#altura = altura
    this.#tipo = tipo


    //Selando o objeto. Isso impede que novos atributos públicos
    // sejam adicionados ao objeto após a sua criação
    Object.seal(this)
    
    console.log('Interno:', this) // This é uma referencia interna ao mesmo objeto, ele mesmo (forma1)

    }
    /*
    getters: métodos especiais que permintem expor o vlor dos atributos privados de forma SOMENTE-LEITURA , SEM PERMITIR A SUA MODIFICAÇÃO
    */
    get base() {
        return this.#base
    }
    
    get altura() {
        return this.#altura
    }

    get tipo() {
        return this.#tipo
    }

    /*********************************************************************************************************************************
        * PRORIEDADE CALCULADA: não retorna um valor armazenado em um
        * atributo privado. Em vez disso, calcula "ao vivo" em valor e o retorna
     */

    /*
        setters: permitem que o mundo externo possa alterar o valor de atributsos privados, caso o novo valor esteja de acordo com as regras de negócio.
    */

    set base(valor) {
      // base deve ser numérica e seu valor maior que zero
    if (isNaN(valor) || valor <= 0) throw new Error('A base deve ser númerica e sue valor maior que zero.')  
    this.#base = valor // O atributo #base recebe o novo valor validado
    }

    set altura(valor) {
        // altura deve ser numérica e seu valor maior que zero
    if(isNaN(valor) || valor <= 0) throw new Error('A altura deve ser númerica e sue valor maior que zero.')
    this.#altura = valor  // O atributo #base recebe o novo valor validado
    }

    set tipo(valor) {
       // if(tipo !== 'Q' && tipo !== 'T' && tipo !== 'E') -> segunda forma de escrever o algoritmo
    if(! ['Q', 'T', 'E'].includes(valor)) throw new Error('O tipo deve ser Q, T ou E.') 
    this.#tipo = valor // O atributo #base recebe o novo valor validado
    }
    /*
        QUando um atributo tem pelo menos um getter ou um setter associado a ele, passamos a nos referir a ele como PROPRIEDADE do objeto.
    */
    /******************************************************************************************************************************************** */
    // Função, dentro de classes, passam a ser denominadas Médotos e perdem a palavra function

    calcularArea()    {
    switch(this.tipo) {
        case 'Q':
            return this.base * this.altura
        case 'T':
            return this.base * this.altura / 2
        default:
            return (this.base /2) * (this.altura /2) * Math.PI
    }
}

}

let forma1, forma2, forma3

// Criação de alguns objetos a partir  da classe
try{ //TENTA executar as linhas contidas se acontcer alguma exceção no bloco try, a execução é desviada par ao bloco catch
forma1 = new FormaGeometrica (8,4,'Q')
console.log(forma1)
}
catch(erro) { // O bloco catch() recebe o erro que foi gerado no bloco try. Tratamento de exceção. Nesse caso, simplesmente exibiremos a mesagem de erro.
    console.log('ERRO:' + erro.message)
}

try{ //TENTA executar as linhas contidas se acontcer alguma exceção no bloco try, a execução é desviada par ao bloco catch
    forma3 = new FormaGeometrica ('cebola','alho','X')
    console.log(forma3)

}
catch(erro) { // O bloco catch() recebe o erro que foi gerado no bloco try. Tratamento de exceção. Nesse caso, simplesmente exibiremos a mesagem de erro.
    console.log('ERRO:' + erro.message)

}
try{ //TENTA executar as linhas contidas se acontcer alguma exceção no bloco try, a execução é desviada par ao bloco catch
forma2 = new FormaGeometrica (2,0.5,'T')
console.log('Externo:', forma2)
}
catch(erro) { // O bloco catch() recebe o erro que foi gerado no bloco try. Tratamento de exceção. Nesse caso, simplesmente exibiremos a mesagem de erro.
    console.log('ERRO:' + erro.message)
}

// Alterando o valor de um atributo do ibjeto Depoois de sua criação, ele não passa mais pela validação e ele aceita qualquer coisa.
//forma1.base = 'abobrinha'
forma1.base = 10
forma1.altura = 8.5

console.log({
    base: forma1.base,          // Acesso ao getter base
    altura: forma1.altura,      // Acesso ao getter base
    tipo: forma1.tipo           // Acesso ao getter base
})

console.log('calcularArea() de forma (métpdo);', forma1.calcularArea())