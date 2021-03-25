let trocas, pass, comps  // Para fazer a variaveis estatiticas tem que ser coocadas fora.

function selectionSort(vetor, fnComp) {

        trocas = 0 , pass = 0, comps = 0

    function encontrarMenor(inicio) {
        let menor = inicio
        // Este loop vai até a última posição
        for (let j = inicio + 1; j < vetor.length; j++)     {
            //if(vetor[j] < vetor[menor]) menor = j - Comparação do 07-selection-sort.mjs
            // Na passagem para função de comparação, a ordem dos objetos precisa ser invertida
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comps++
        }
        return menor
    }
    //Percurso do vetor até a PENÚLTIMA posição com vetor.lenght -2
    for (let i = 0; i <= vetor.length - 2; i ++) {  
        pass++  // Cada roda do For é uma passada
        let menor = encontrarMenor(i + 1)

       // if (vetor[menor]< vetor[i]) { // Comparação do 07-selection-sort.mjs
       // Parâmetros em ordem invertida  
    if(fnComp(vetor[i], vetor[menor])) {
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]] // Para trocar os valores de posição por isso coloco na linha de baixo a trocas++
            trocas++
        }
        comps++  // Colocamos comps++ pois passou pelo IF na linha 28.
    }
}

// Função de comparação retorna true caso o PRIMEIRO objeto seja MAIOR que o SEGUNDO

import { candidatos } from './includes/candidatos-2018.mjs'

//console.log('ANTES:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
selectionSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
let memoria = process.memoryUsage().heapUsed / 1024 / 1024  // Para vermos a memoria gasta em mega bytes pois divide bytes por kilobites, depois kilobytes divide por megabyte
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
console.log({trocas, pass, comps, memoria})