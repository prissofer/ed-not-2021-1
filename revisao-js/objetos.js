// Objetos são estruturas que permitem armazenar diversos valores em uma mesma variável, permitindo acessá-los por meio de um nome
// Criação de um objeto vazio 
let vazio1 = {}     // Forma "moderna"
let vazio2 = new Object() //Forma "tradicional"

// Criando um objeto já com dados
let pessoa = {
    // Os dados são armazenados no formato
    // propriedade: valor ou também como
    // atributo: valor
    nome: 'Orkutilson de Oliveira',
    sexo: 'M',
    dataNasc: '2008-04-19',
    ocupacao: 'estudante',
    // Nome da propriedade pode ter espaçoes ou acentos
    // Nesse caso, o nome da propriedade prisoca estar entre aspas simples
    'cidade de origem': 'Franca/SP',
    gostos: ['jogos', 'doces', 'dormir'] // Vetor em um posição de objeto
}
console.log(pessoa)
console.table(pessoa)

// Exibindo apenas o valor de uma propriedade
console.log(pessoa.nome)
console.log(pessoa.ocupacao)

// Quando o nome da propriedade tem espaços ou acentos, não é possível usar a sintaxe de ponto (.). É necessário usat a sintaxe de colchetes.
console.log(pessoa['cidade de origem'])
console.log(pessoa.gostos)
console.log(pessoa.gostos[2])

// A sintaxe dos colchete SEMPRE funciona, mesmo se o nome da propriedade for uma única paralavra sem acento
console.log(pessoa['nome'])
console.log(pessoa['gostos'][2])     // Monstrando só o 3º gosto

// Outra consequência da sintaxe dos colchetes é a possibilidade de usar nomes de propeiedades que estão dentro de variáveis

let x = 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

// Criando uma nova propriedade para um objeto já existente
// Nasta atribuir um valor a um nome de propriedade ainda nao existente
pessoa.email = 'orkutilson@gamil.com'
pessoa.celular = '(16) 98765-4321'
console.table(pessoa)

// Criando um objeto vazio e só depois adicionando propriedaddes
let carro = {}
carro.marca = 'Volkswagen'
carro.modelo = 'Kombi'
carro.ano = 1971
carro['combstível'] = 'gasolina'
carro.cor = 'bege'

console.table(carro)

// Excluindo uma propriedade de um objeto
delete carro.ano
console.table(carro)

console.log('---------------------------------------')

// Exibindo todas as propriedades de um objeto
// for.. in determina quais as propriedades de um objeto e coloca cada uma delas em uma variável informada pelo usuário (p, no caso) a cada iteração do loop
for(let p in pessoa)    {
    console.log(p)
}

console.log('---------------------------------------')

for(let p in carro) {
    console.log(p)
}

console.log('---------------------------------------')

// For .. in para listar propriedades de valores de um objeto

for(let atrib in pessoa)    {
    console.log(atrib + ' -> ' + pessoa[atrib])
}




