let comps

function buscaBinaria(vetor, fnComp) {
    comps = 0
    let ini = 0
    let fim = vetor.length -1
    let meio 
    while(fim >= ini) {
        meio = Math.floor((fim + ini)/ 2)   // Math.florr() arredonda para baixo
        switch(fnComp(vetor[meio])) {
            case 0:         // Valor encontrado
                comps++
                return meio
    
            case 1:         // Valor de busca é MAIOR
                comps += 2
                ini = meio +1
                break

            default:        // Valor de busca é MENOR
                comps += 2
                fim = meio -1
        }
    }
    return -1 // Não existe
}

// A função de comparação para a busca binária retornar um de três valores:
// Retonar 0: o valor de busca e o valor no objeto são IGUAIS
// Retorno -1: o valor de busca é MENOR que o valor no objeto
// Retorno 1: o valor de busca é MAIOR que o valor no objeto

const comparaNome = (objNome, busca = 'FAUSTO') => {  // ela não foi usada pois cada busca precisou usar sua função personalizada,era só pra mostrar a lógica.
    if(busca === objNome.first_name) return 0
    else if (busca < objNome.first_name) retorn -1
    else return 1
}

import { objNomes } from './includes/vetor-obj-nomes.mjs'  // // Como importar arquivo em outra pasta com extensão mjs (módulo java sript). Atenção no arquivo de dados temos que exportar.

console.time('Buscando ZOZIMO')
console.log(buscaBinaria(objNomes, (objNome, busca = 'ZOZIMO') => {
    if(busca === objNome.first_name) return 0
    else if (busca < objNome.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ZOZIMO')

console.time('Buscando LAMARA')
console.log(buscaBinaria(objNomes, (objNome, busca = 'LAMARA') => {
    if(busca === objNome.first_name) return 0
    else if (busca < objNome.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando LAMARA')

console.time('Buscando ORKUTILSON')
console.log(buscaBinaria(objNomes, (objNome, busca = 'ORKUTILSON') => {
    if(busca === objNome.first_name) return 0
    else if (busca < objNome.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ORKUTILSON')

console.time('Buscando NADIR')
console.log(buscaBinaria(objNomes, (objNome, busca = 'NADIR') => {
    if(busca === objNome.first_name) return 0
    else if (busca < objNome.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando NADIR')

console.time('Buscando GERCINA')
console.log(buscaBinaria(objNomes, (objNome, busca = 'GERCINA') => {
    if(busca === objNome.first_name) return 0
    else if (busca < objNome.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando GERCINA')

console.time('Buscando ALIPIO')
console.log(buscaBinaria(objNomes, (objNome, busca = 'ALIPIO') => {
    if(busca === objNome.first_name) return 0
    else if (busca < objNome.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando ALIPIO')

console.time('Buscando PRISCILA')
console.log(buscaBinaria(objNomes, (objNome, busca = 'PRISCILA') => {
    if(busca === objNome.first_name) return 0
    else if (busca < objNome.first_name) return -1
    else return 1
}), {comps})
console.timeEnd('Buscando PRISCILA')