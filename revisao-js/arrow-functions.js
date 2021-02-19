// Função que eleva um número ao quadrado
// se precisar disso em uma situção real, use Math.pow() ou operador **

function quadrado(n)    {
    return n*n
}
console.log(quadrado(9))

// Carcterística da função acima:
// 1) Apenas um parâmetro
// 2) Apenas uma linha de códigoo, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

// Transformando em arrow funtiction
// a) Não precisa de parênsetes envolvendo o parâmentro
// b) A palavra function é substituída pelo sinal =>, Depois do parâmetro
// c) Não são necessárias as chaves e nem a palavra  return
const quadrado2 = n => n * n
console.log(quadrado2(9))

// Função com mais de um parâmetro
function potencia(b, e) {   // b = base , e = expoente
    return b ** e
}
console.log(potencia(2, 8))

//Função equivalente no formato de arrow function
// Quando temos mais de parâmetro, os parênteses em volta dos argumentos voltam a ser obrigatórios
let potencia2 = (b, e) => b ** e
console.log(potencia2(2, 8))

// Função sem parâmetro
function megasena() {
    // Esta função retorna um número aleatório entre 1 e 60
    // Math.randow() -> retornaum número aleatório entre 0 (inclusive) e 1 (exclusive)
    // *60 -> ajusta a faixa de valores para 0 e 59
    // + 1 -> ajusta a faixa de valores para enter 1 e 60
    // Math.floor -> arredonda para o menor inteiro (tirar as casas decimais)
    return Math.floor(Math.random() * 60 + 1)
}
console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena())

// Quando a função não tem argumentos, na arrow function é necessário deixar uma par de parênteses vazios para marcar seu lugar
const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2())

// Função com mais de uma linha de código no corpo
function somaVet(vet)   {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet([12, 42, -11, 20, 9, 16]))

// Quando a função tem mais de uma linha de código, na arrow function equivalente, retornam as chaves e também a palavra reurn, caso ela retorne valor.
const somaVet2 = vet => {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet2([12, 42, -11, 20, 9, 16]))

// Conclusão: arrow functions foram concebidas para facilitar a escrita de funções de apenas uma linha, embora também possam ser usadas para funções múltiplas linhas.