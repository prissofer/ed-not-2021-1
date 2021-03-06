/*
MERGE SORT

No processo de ordenação, esse algoritmo "desmonta" o vetor original contendo N elementos até obter N vetores  de apenas um elemento casa um.
Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor, dessa vez com os elementos já em ordem.

*/
let comps , divisoes, juncoes

function mergeSort(vetor) {
    
    function mesclar(vetEsq, vetDir) {
        let pEsq = 0 , pDir = 0, vetRes = [] // 0 (zero) é a posição do vetor onde inicia, vetRes[] é onde iremos unir os dados no vetor
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            if(vetEsq[pEsq] < vetDir[pDir]) {
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++
        }
        // Descobrir de qual lado sobrou 
        let sobra
        // Sobra à esquerda 
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
        // Sobra à direita
        else sobra = vetDir.slice(pDir)
        //Retorna vetor de resultados = sobra
        return [...vetRes, ...sobra] // Resultado consolidado de 2 vetores
    }
     
    // Aqui estamos desmontado o vetor
    if(vetor.length > 1) { //Para ser "desmontado", um vetor deve ter, pelo menos, 2 elementos
        const meio = Math.floor(vetor.length / 2)  // Para dividir o vetor ao meio 
        // Aqui criamos as variavéis para salvar os novos vetores
        // slice() fatia um vetor, copiando os elementos desde a posição inicial informada (inclusive - posição 0 até a penúltima posição) até a posição final (exclusive - a posição final NÂO entra)
        let vetEsq = vetor.slice(0, meio)
        // Caso o segundo parâmentro de slice() seja omitido , serão copiados os elementos desde a posição informada até a posição final.
        let vetDir = vetor.slice(meio)
        divisoes++

        //console.log({vetEsq, vetDir}) // São para vermos desmontar as funções

        // Chamadas recursivas à função, aqui eu estou chamando a função mergeSort linha 9 para dividir novamente as partes que dividimos em vetEsq e vetDir.
        // Colocando o resultador dentro das veriáveis
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)

        const vetFinal = mesclar (vetEsq, vetDir)
        juncoes++
       //console.log({vetFinal}) // São pra vermos as juções do vetor

        return vetFinal
    }
    return vetor  // Vetor de 1 elemento, não modificado, condição de saída está ligado com a linha 34.
}

comps= 0, divisoes = 0, juncoes = 0  // estamos zerando fora da função pois como ele faz copias se zerarmos dentro perdemos a contagem
//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
//let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let numsOrd = mergeSort(nums)
console.log({numsOrd})
console.log({comps, divisoes, juncoes})

import { nomes } from './includes/100-mil-nomes.mjs'

comps = 0, divisoes = 0, juncoes = 0   // estamos zerando fora da função pois como ele faz copias se zerarmos dentro perdemos a contagem
console.time('Ordenando nomes...')
const nomesOrd = mergeSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024  // Para vermos a memoria gasta em mega bytes pois divide bytes por kilobites, depois kilobytes divide por megabyte
console.log('DEPOIS:', nomesOrd)
console.log({comps, divisoes, juncoes, memoria})