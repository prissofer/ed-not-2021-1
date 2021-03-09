/* Algoritmos de ordenação
1) Buble Sort (Ordenação de bolha) 
Fazemos a primeira passsada ordenando o vetor 8
Fazemos a segunda passada ordenando o vetor 6
Fazemos a terceira passada ordenando o vetor 5
Fazemos a quarta passada ordenando o vetor 4
Fazemos a quinta passada ordenando o vetor 2
Fazemos a sexta passada ordenando o vetor 1
Fazemos a setima passada comparando os dados do vetor para se certificar que não foi necessário fazer nenhum troca.
Ou seja percorre o conjunto fr dados, comparnado o elemento atual com o seu sucessor e promovendo a troca entre eles caso o primero seja maior que o segundo.
Faz isso em várias passadas, até que na última delas, nenhuma troca tenha sido registrada.
*/

let totTrocas, pass, comps

function bubbleSort(vetor)  {
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0      // Iniciando uma nova passada
        pass ++         // Quantidade de passadas
        //Percurso do vetor, da primeira até a penúltima posição porque verificamos ele contra a ultima posição
        for(let i = 0; i <= vetor.length - 2; i++) { // vetor.length -2 é para comparar até a penultima posição, ouseja a penultima com a ultima
            if(vetor[i] > vetor[i +1])  {
                // Troca direta em JS via desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]  // Faz a igualdade para o sistema realiza a troca de posição
                trocas++   // para incrementar as trocas
            }
            comps++    // Quantidade de comparações
        }
        totTrocas += trocas   // Quantidade total de trocas
    } while (trocas > 0)
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

// Pior caso: vetor em ordem inversa
// let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// Melhor caso: vetor já ordenado
// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('Antes', nums)
bubbleSort(nums)
console.log('Depois:', nums)
console.log({totTrocas, pass, comps})

import { nomes } from './includes/100-mil-nomes.mjs'

console.log('Antes', nomes)
console.time('Ordenando nomes ...')
bubbleSort(nomes)
console.timeEnd('Ordenando nomes ...')
console.log('Depois:', nomes)
console.log({totTrocas, pass, comps})