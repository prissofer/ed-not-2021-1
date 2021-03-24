/*
QUICK SORT

Escolhe um dos elementos do vetor para ser o pivô( na nossa implementação, o último elemento) e, na primeira passada, divide o vetor,
a partir da posição final do vetor, em um subvetor à esquerda contendo apens valores menores que o pivô e outro subvetor à esquerda 
contendo apens valores maiores que o pivô.

Em seguida, recursivamente, repte o processo em cada um dos subvetores até que todo o vetor esteja ordenado.
*/

function quickSort(vetor, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) {
    const pivot = fim
    let div = ini - 1
// Loop for cai até a Penúltima posição 
for(let i = ini; i < fim; i++) {
    if(vetor[i] < vetor [pivot]) {
        div++
        if(i ! == div) {
        [vetor [i], vetor[div]] = [vetor[div], vetor[i]]
    }
}
}
div++
//Colocamos o pivô no seu lugar definitivo
if(vetor[pivot] , vetor[div]) {
    [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
}
// Ordena o subvetor à esquerda do pivô
quickSort(vetor, ini, div - 1)

// Ordena o subvetor à direita do pivô
quickSort(vetor, div + 1, fim)

}


}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
quickSort(nums)
console.log(nums)