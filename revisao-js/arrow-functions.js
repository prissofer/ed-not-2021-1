// Função que eleva um número ao quadrado
// se precisar disso em uma situção real, use Math.pow() ou operador **

function quadrado(n)    {
    return n*n
}
console.log(quadrado(9))

// Carcterística da função acima:
// 1) Apenas um parâmetro
// 2) Apenas uma lonha de códigoo, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

// Transformando em arrow funtiction
// a) Não precisa de parênsetes envolvendo o parâmentro
// b) A palavra function é substituída pelo sinal =>, Depois do parâmetro
// c) Não são necessárias as chaves e nem a palavra  return
const quadrado2 = n => n * n
console.log(quadrado2(9))
