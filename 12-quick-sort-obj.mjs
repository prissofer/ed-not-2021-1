let trocas, comps, pass

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) { // Não podemos colocar os parâmetros obrigatórios (vetor e fnComp) depois dos parâmetros opcionais
    if(fim > ini) {  // Condição de saída
        pass++   
        const pivot = fim
        let div = ini - 1
// Loop for vai até a PENÙLTIMA posição, por que a última posição está ocupada pelo pivô (var fim).
        for(let i = ini; i < fim; i++) {
            //if(vetor[i] < vetor [pivot]) {
            if(fnComp(vetor [pivot], vetor[i])) {    // Parâmetros invertidos
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
        //if(vetor[pivot] < vetor[div]) {
        if(fnComp(vetor[div], vetor[pivot])) {      // Parâmetros invertidos
            [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }
        comps++

        // Ordena o subvetor à esquerda do PIVÔ
        quickSort(vetor, fnComp, ini, div - 1)

        // Ordena o subvetor à direita do PIVÔ
        quickSort(vetor, fnComp, div + 1, fim)

    }
}

import { candidatos } from './includes/candidatos-2018.mjs'

trocas = 0, comps = 0, pass = 0  // zero(0) fora da função pois é um função RECURSSIVA e se zerar dentro ela zera os contadores
//console.log('ANTES:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
//quickSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

//Ordenação por SG_UE, depois por DS_CARGO e , finalmente, por NR_CANDIDATO
quickSort(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE) {    //Empate na UF
        // Empate no cargo, desempate no número do candidato
        if(obj1.DS_CARGO === obj2.DS_CARGO) return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO
        // UF igual, cargos diferentes, diferencia por cargo
        else return obj1.DS_CARGO > obj2.DS_CARGO
    }
    // UFs diferentes, diferencia por UF
    else return obj1.SG_UE > obj2.SG_UE
})
let memoria = process.memoryUsage().heapUsed / 1024 / 1024  // Para vermos a memoria gasta em mega bytes pois divide bytes por kilobites, depois kilobytes divide por megabyte
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
console.log({trocas, pass, comps, memoria})