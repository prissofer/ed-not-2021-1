/*
QUICK SORT

Escolhe um dos elementos do vetor para ser o pivô( na nossa implementação, é o último elemento) e, na primeira passada, divide o vetor,
a partir da posição final do vetor, em um subvetor à esquerda contendo apens valores menores que o pivô e outro subvetor à direita, que 
contêm apenas valores maiores que o pivô.

Em seguida, recursivamente, repete o processo em cada um dos subvetores até que todo o vetor esteja ordenado.
*/
let trocas, comps, pass

function quickSort(vetor, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) {  // Condição de saída
        pass++   
        const pivot = fim
        let div = ini - 1
// Loop for vai até a PENÙLTIMA posição, por que a última posição está ocupada pelo pivô (var fim).
        for(let i = ini; i < fim; i++) {
            if(vetor[i] < vetor [pivot]) {
                comps++
                div++
                if(i !== div) {  // Se i for diferente da div, por que se for iguais não fazemos a troca
                [vetor [i], vetor[div]] = [vetor[div], vetor[i]] // faço a troca da posição i com a posição div, quando forem diferentes.
                trocas++
                }
            }
        }
        div++
        //Colocamos o PIVÔ no seu lugar definitivo
        if(vetor[pivot] < vetor[div]) {
            [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }
        comps++

        // Ordena o subvetor à esquerda do PIVÔ
        quickSort(vetor, ini, div - 1)

        // Ordena o subvetor à direita do PIVÔ
        quickSort(vetor, div + 1, fim)

    }
}

trocas = 0, comps = 0, pass = 0  // zero(0) fora da função pois é um função RECURSSIVA e se zerar dentro ela zera os contadores
//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
quickSort(nums)
console.log(nums)
console.log({trocas, comps, pass})

import { nomes } from './includes/100-mil-nomes.mjs'

trocas = 0, comps = 0, pass = 0  // zero(0) fora da função pois é um função RECURSSIVA e se zerar dentro ela zera os contadores
console.time('Ordenando nomes...')
quickSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024  // Para vermos a memoria gasta em mega bytes pois divide bytes por kilobites, depois kilobytes divide por megabyte
console.log('DEPOIS:', nomes)
console.log({trocas, pass, comps, memoria})