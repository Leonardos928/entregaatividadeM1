/* 🧠 Desafio: Aprovado reprovado

Você foi contratado para desenvolver um algoritmo que consiga identificar se um aluno foi ou não aprovado.

Para o aluno ser aprovado, a média da nota total deve estar acima de 8 e a presença deve estar acima de 6.

Desenvolva um algoritmo que leia:
matéria, nome, nota e a presença de um aluno.

As notas de cada matéria varia de 0 a 10. Armazene cada informação em uma variável, nome e presença serão solicitados somente uma vez.

Nota e matéria serão solicitados ao usuário mais de uma vez, então você deverá receber estes valores em variáveis diferentes, ou seja, uma variável para cada matéria e uma variável para cada nota.

Exemplo

materiaGeografia
notaGeografia

Some todas notas e atribua a uma variável somaNota.

Tire a média das notas e atribua a variável uma mediaNota. Verifique se a média está acima ou abaixo de 8.

Nota e presença não podem ser 0

Nome deve ter no mínimo 5 carácteres

Instruções para o desenvolvimento
Se a entrada for de um número abaixo de 0 ou acima de 10, para nota ou presença, alertar que o valor é inválido
Se nome tiver menos que 5 carácteres, alertar que o nome é inválido
Se a média de notas do aluno for igual ou acima de 8 e a presença igual ou acima de 6 deve alertar:

A nota do aluno nome é de mediaNota e sua presença de presenca: Aluno provado!

Caso contrário:

A nota do aluno nome é de mediaNota e sua presença de presenca: Aluno reprovado! */
//------------------------------------------------------------------------------------------------------------------------
// Se a entrada for de um número abaixo de 0 ou acima de 10, para nota ou presença, alertar que o valor é inválido.
// Se nome tiver menos que 5 carácteres, alertar que o nome é inválido.
// Se a média de notas do aluno for igual ou acima de 8 e a presença igual ou acima de 6 deve alertar:
// A nota do aluno nome é de mediaNota e sua presença de presenca: Aluno provado!

//REsultado: A nota do aluno kenzie é de 9.1 e sua presença de 9: Aluno provado!
//------------------------------------------------------------------------------------------------------------------------



let aluno = prompt("Entre com o nome do aluno! (Minimo 5 caracteres)")
let matematica = prompt("Digite matematica aqui")
let nota1 = parseFloat(prompt("Qual a nota? de 0 a 10"))
let presenca = parseInt(prompt("Qual a presença?"))

//---------------------------------------------------------------------------------------------------

let portugues = prompt("Digite portugues aqui")
let nota2 = parseFloat(prompt("Qual a nota? de 0 a 10"))

let informatica = prompt("Digite informatica aqui")
let nota3 = parseFloat(prompt("Qual a nota? de 0 a 10"))

let Geografia = prompt("Digite geografia aqui")
let nota4 = parseFloat(prompt("Qual a nota? de 0 a 10"))

let Inglês = prompt("Digite ingles aqui")
let nota5 = parseFloat(prompt("Qual a nota? de 0 a 10"))

let Historia = prompt("Digite historia aqui")
let nota6 = parseFloat(prompt("Qual a nota? de 0 a 10"))

let Filosofia = prompt("Digite filosofia aqui")
let nota7 = parseFloat(prompt("Qual a nota? de 0 a 10"))

let Sociologia = prompt("Digite sociologia aqui")
let nota8 = parseFloat(prompt("Qual a nota? de 0 a 10"))

let Literatura = prompt("Digite literatura aqui")
let nota9 = parseFloat(prompt("Qual a nota? de 0 a 10"))

let EducaçãoFisica = prompt("Digite educação Fisica aqui")
let nota10 = parseFloat(prompt("Qual a nota? de 0 a 10")) 


let aluno1 = aluno.length
let somaNota = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10
let mediaNota = somaNota / 10



if (nota1 < 0) {
    alert(`Valor invalido`)
} else if (presenca > 10) {
    alert(`Valor invalido`)
} if (aluno1 < 5) {
    alert(`Nome invalido`)
} if (mediaNota >= 8 && presenca >= 6) {
    alert(`A nota do aluno ${aluno} é de ${mediaNota} e sua presença de ${presenca}: Aluno aprovado!`)
} else {
    alert(`A nota do aluno ${aluno} é de ${mediaNota} e sua presença de ${presenca}: Aluno reprovado!`)
}
