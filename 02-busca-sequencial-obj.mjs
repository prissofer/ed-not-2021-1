/* Busca sequencial em um arquivo de objetos, arquivo de objetos não é comparável para fazer a comparação precisamos olhar item a item do arquivo.
 Nesse caso incluímos um 3º parametro na funçao para torna-la mais generica para não ter que criar um função para caso objeto como no caso acima.
 onde tercerizamos a comparação para outra função, nesse caso comparaNome na linha 15.*/

 function buscaSequencial(vetor, valorBusca, fnComp) {
    for(let i = 0; i < vetor.length; i++) {
        // Em vez de fazer a comparação dentro da função de busca,
        // "terceirizamos" essa comparação chamando uma função externa (comparaNome)
        //if(fnComp(vetor[i], valorBusca)) return i // Retorna a posição onde foi encontrado
        if(fnComp(vetor[i], valorBusca)) return i // Retorna a posição onde foi encontrado
    }
    return -1   // Valor de busca não encontrado
}

const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca  // Função de comparação

import { objNomes } from './includes/vetor-obj-nomes.mjs'  // // Como importar arquivo em outra pasta com extensão mjs (módulo java sript). Atenção no arquivo de dados temos que exportar.

console.log(buscaSequencial(objNomes, 'FAUSTO', comparaNome)) //  vetor[i] = objNome, valorBusca = 'Fausto', fnComp = comparaNome

/* Podemos ainda otimizar mais o código passar a função de comparação para dentro da chamada da função */

console.log(buscaSequencial(objNomes, 'MARIA', (objNome, valorBusca) => objNome.group_name === valorBusca))



 