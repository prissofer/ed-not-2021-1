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
    
    console.log('Interno:', this) // This é uma referencia interna ao mesmo objeto, ele mesmo (forma1)

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
forma1.base = 'abobrinha'
console.log(forma1)