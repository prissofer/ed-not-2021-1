/*
MERGE SORT

No processo de ordenação, esse algoritmo "desmonta" o vetor original contendo N elementos até obter N vetores  de apenas um elemento casa um.
Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor, dessa vez com os elementos já em ordem.

*/

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

        console.log({vetEsq, vetDir})

        // Chamadas recursivas à função, aqui eu estou chamando a função mergeSort linha 9 para dividir novamente as partes que dividimos em vetEsq e vetDir.
        // Colocando o resultador dentro das veriáveis
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)

        const vetFinal = mesclar (vetEsq, vetDir)
        console.log({vetFinal})

        return vetFinal
    }
    return vetor  // Vetor de 1 elemento, não modificado
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
let numsOrd = mergeSort(nums)
console.log({numsOrd})