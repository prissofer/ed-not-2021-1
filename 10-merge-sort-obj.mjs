let comps , divisoes, juncoes

function mergeSort(vetor, fnComp) {
    
    function mesclar(vetEsq, vetDir) {
        let pEsq = 0 , pDir = 0, vetRes = [] // 0 (zero) é a posição do vetor onde inicia, vetRes[] é onde iremos unir os dados no vetor
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            //if(vetEsq[pEsq] < vetDir[pDir]) {
                if(fnComp(vetDir[pDir], vetEsq[pEsq])){ // Parâmetros invertidos
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
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)

        const vetFinal = mesclar (vetEsq, vetDir)
        juncoes++
       //console.log({vetFinal}) // São pra vermos as juções do vetor

        return vetFinal
    }
    return vetor  // Vetor de 1 elemento, não modificado, condição de saída está ligado com a linha 34.
}

import { candidatos } from './includes/candidatos-2018.mjs'

comps = 0, divisoes = 0, juncoes = 0
//console.log('ANTES:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
//let candidatosOrd = mergeSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

// Ordenação por dois níveis: primeiro por UF (SG_UF) e, dentro da UF, pelo nº do candidato (NR_CANDIDATO)
let candidatosOrd = mergeSort(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE) {    // Empate de UE
        //Desempate pelo NR_CANDIDATO
       return obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO
    }
    else return obj1.SG_UE > obj2.SG_UE     // A diferenciação se dá por UF
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024  // Para vermos a memoria gasta em mega bytes pois divide bytes por kilobites, depois kilobytes divide por megabyte
console.timeEnd('Ordenando candidatos...')
//console.log('DEPOIS:', candidatosOrd)
candidatosOrd.map(obj => console.log(obj))
console.log({comps, divisoes, juncoes, memoria})