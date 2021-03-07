/* Busca sequencial em um arquivo de objetos, arquivo de objetos não é comparável para fazer a comparação precisamos olhar item a item do arquivo.
 Nesse caso incluímos um 3º parametro na funçao para torna-la mais generica para não ter que criar um função para caso objeto como no caso acima.
 onde tercerizamos a comparação para outra função, nesse caso comparaNome na linha 15.*/

 function buscaSequencial(vetor, fnComp) {
    for(let i = 0; i < vetor.length; i++) {
        // Em vez de fazer a comparação dentro da função de busca,
        // "terceirizamos" essa comparação chamando uma função externa (comparaNome)
        //if(fnComp(vetor[i], valorBusca)) return i // Retorna a posição onde foi encontrado
        if(fnComp(vetor[i])) return i // Retorna a posição onde foi encontrado
    }
    return -1   // Valor de busca não encontrado
}

import { objNomes } from './includes/vetor-obj-nomes.mjs'  // // Como importar arquivo em outra pasta com extensão mjs (módulo java sript). Atenção no arquivo de dados temos que exportar.

console.time('Buscando ZOZIMO')
console.log(buscaSequencial(objNomes, objNome => objNome.first_name === 'ZOZIMO'))
console.timeEnd('Buscando ZOZIMO')

console.time('Buscando LAMARA')
console.log(buscaSequencial(objNomes, objNome => objNome.first_name === 'LAMARA'))
console.timeEnd('Buscando LAMARA')

console.time('Buscando ORKUTILSON')
console.log(buscaSequencial(objNomes, objNome => objNome.first_name === 'ORKUTILSON'))
console.timeEnd('Buscando ORKUTILSON')

console.log('-------------------------------------------------------------------------------------------------------------')

console.log(buscaSequencial(objNomes, objNome => objNome.first_name === 'FAUSTO'))
console.log(buscaSequencial(objNomes, objNome => objNome.group_name === 'MARIA'))

// Primeiro nome da lista que tem mais de 1.000 pessoas registradas com o nome.

let pos = buscaSequencial(objNomes, objNome => objNome.frequency_total > 1000)

console.log(objNomes[pos])

// Primeiro nome masculino da lista que tem mais de 10.000 pessoas registradas com o nome.

pos = buscaSequencial(objNomes, objNome => objNome.frequency_total > 10000 && objNome.classification === 'M')

console.log(objNomes[pos])

/* O problema da busca sequencial é o excesso de comparação e a comparação usa recurso da CPU (um ciclo)*/
