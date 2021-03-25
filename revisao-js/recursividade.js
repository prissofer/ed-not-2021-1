//Fatorial de um número 

// 5! = 5 * 4 * 3 * 2 * 1 (120)
// 4! = 4 * 3 * 2 * 1 (24)
// 5! = 5 * 4!
// 5! = 5 * (5-1)!
// n! = n * (n-1)!
// 1! = 1
// 0! = 1

// Função de calculo fatorial, pelo método ITERATIVO
function  fatorial1(n)   {
    let res = 1
    for(let i = n; i > 1; i --) res *= i  //  ou res = i * i
    return res
}

console.log(fatorial1(5))
console.log(fatorial1(4))


// Função de calculo do fatorial, pelo método Recursivo (normalmente é um método mais compacto no tamanho do código)
function fatorial2(n) {
    if(n <= 1) return 1   //Condição de saída (é preciso que pelo menos um caso eu não chame a própria Função)
    else return n * fatorial2 (n - 1)  // Recursividade acontece quando eu chamo a propria função dentro da função, porm com parametros diferentes primeiro chamamos n, depois n-1.
}

console.log(fatorial2(5))
console.log(fatorial2(4))