/*
SELECTION SORT

Trata-se de uma otimização do bibble sort, diminuindo drasticamente o número de trocas necessárias para fazer a ordenação.
Isola um dos valores do vetor e procura pelo menor valor entre os restantes promovendo a troca caso o primeiro valor seja
maior que o segundo. Ele irá comparar todo vetor e após irá fazer a troca.

Comparando Selction Sorte e Bubble Sort aumenta o número de passadas, mas reduz trocas e comps.

*/

let trocas, pass, comps  // Para fazer a variaveis estatiscas tem que ser coocadas fora.

function selectionSort(vetor) {

        trocas = 0 , pass = 0, comps = 0

    function encontrarMenor(inicio) {
        let menor = inicio
        // Este loop vai até a última posição
        for (let j = inicio + 1; j < vetor.length; j++)     {
            if(vetor[j] < vetor[menor]) menor = j
            comps++
        }
        return menor
    }
    //Percurso do vetor até a PENÚLTIMA posição com vetor.lenght -2
    for (let i = 0; i <= vetor.length - 2; i ++) {  
        pass++  // Cada roda do For é uma passada
        let menor = encontrarMenor(i + 1)
        if (vetor[menor]< vetor[i]) {
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]] // Para trocar os valores de posição por isso coloco na linha de baixo a trocas++
            trocas++
        }
        comps++  // Colocamos comps++ pois passou pelo IF na linha 28.
    }
}

//let nums  = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
selectionSort (nums)
console.log(nums)
console.log ({trocas, pass, comps})

import { nomes } from './includes/100-mil-nomes.mjs'

console.time('Ordenando nomes...')
selectionSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024  // Para vermos a memoria gasta em mega bytes pois divide bytes por kilobites, depois kilobytes divide por megabyte
console.log('DEPOIS:', nomes)
console.log({trocas, pass, comps, memoria})