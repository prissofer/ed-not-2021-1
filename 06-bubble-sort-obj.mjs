
let totTrocas, pass, comps

function bubbleSort(vetor, fnComp)  {
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0      // Iniciando uma nova passada
        pass ++         // Quantidade de passadas
        //Percurso do vetor, da primeira até a penúltima posição porque verificamos ele contra a ultima posição
        for(let i = 0; i <= vetor.length - 2; i++) { // vetor.length -2 é para comparar até a penultima posição, ouseja a penultima com a ultima
            if(fnComp(vetor[i], vetor[i + 1])) {
                // Troca direta em JS via desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]  // Faz a igualdade para o sistema realiza a troca de posição
                trocas++   // para incrementar as trocas
            }
            comps++    // Quantidade de comparações
        }
        totTrocas += trocas   // Quantidade total de trocas
    } while (trocas > 0)
}
 
import { candidatos } from './includes/candidatos-2018.mjs'

console.log('ANTES', candidatos)
console.time('Ordenando canditados ...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
bubbleSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando candidatos ...')
console.log('DEPOIS', candidatos)
console.log({totTrocas, pass, comps})