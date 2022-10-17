/* 💪 Atividade Algoritmos - Lista de Exercícios
Para concluir os exercícios a seguir, você deverá fazer uso do prompt() e do alert() para receber os valores e exibir os resultados, respectivamente.

Exemplo
Leia dois números inteiros, a e b, e faça com que eles troquem os valores entre si. Exiba os valores de a e b.

Resolução:
let a = parseInt(prompt("Insira um valor para a"))
let b = parseInt(prompt("Insira um valor para b"))
let aux = 0
aux = a 
a = b
b = aux
alert(`Os valores originais de a e b: ${b}, ${a}. Após a troca são: ${a}, ${b}`)

Aqui no exemplo usamos uma lógica de troca, onde armazenamos o valor da variável que queremos trocar em uma variável auxiliar, para que o valor não seja perdido. Também usamos o parseInt, para restringir a entrada a números inteiros.

Para receber números inteiros no prompt use o parseInt()
let numero = parseInt(prompt('Número'))

let numero = parseFloat(prompt('Número'))
Para receber números com casas após a vírgula (números de ponto flutuante) no prompt use o parseFloat()

let resultado = 1 / 8 //0.125 valor da divisão 
alert(`O resultado é: ${resultado.toFixed(2)}`)
//0.13 é o valor retornado. O tofixed faz o arredondamento, se necessário.      
Você pode restringir o número de casas decimais usando o toFixed(), deixando apenas o número de casas decimais que achar conveniente para o entendimento. */

/* Exercício 1
Leia um número inteiro e imprima-o na saída. */

/* let numeroInteiro = parseInt(prompt("Digite um numero Inteiro!"))
alert(`O numero inteiro digitado foi ${numeroInteiro}`) */


//----------------------------------------------------

/* Exercício 2
Leia três números inteiros e exiba a soma destes números. */

/* let numero1 = parseInt(prompt("Digite o primeiro numero!"))
let numero2 = parseInt(prompt("Digite o segundo numero!"))
let numero3 = parseInt(prompt("Digite o terceiro numero!"))

let somaNum = (numero1 + numero2 + numero3)

alert(`A soma dos numeros digitados é: ${somaNum}!`) */

//-------------------------------------------------------

/* Exercício 3
Leia duas notas semestrais inteiras e exiba a média anual. */

/* let notasSemestrais1 = parseInt(prompt("Digite sua primeira nota semestral"))
let notasSemestrais2 = parseInt(prompt("Digite sua primeira nota semestral"))

let SomaNotasSemestrais = notasSemestrais1 + notasSemestrais2
let mediaAnual = SomaNotasSemestrais / 2

alert(`A media das notas semestrais e: ${mediaAnual}`) */


//--------------------------------------------------------

/* Exercício 4
Leia um número inteiro e exiba o resto da divisão deste número por 2. */

/* let numeroInteiro = parseInt(prompt("digite um numero inteiro!"))

let restoDaDivisao = numeroInteiro % 2

alert(`O resto da divisao do numero inteiro digitado é: ${restoDaDivisao}`) */




//-----------------------------------------------------------
/* Exercício 5
Leia um número inteiro e imprima o seu quadrado. */

/* let numInt = parseInt(prompt("Digite aqui o numero inteiro!"))

let numeroAoQuadrado = numInt * 2

alert(`O numero digitado ao quadrado é: ${numeroAoQuadrado}`) */

//------------------------------------------------------------

/* Exercício 6
Entrar com quatro números e imprimir a média ponderada, sabendo-se que os pesos são respectivamente: 1, 2, 3 e 4. */
/* 
let num1 = parseInt(prompt("digite um numero !"))
let num2 = parseInt(prompt("digite um numero !"))
let num3 = parseInt(prompt("digite um numero !"))
let num4 = parseInt(prompt("digite um numero !"))

let mediaPonderada = num1 * 1 + num2 * 2 + num3 * 3 + num4* 4 / 10

alert(`A media ponderada é: ${mediaPonderada}`) */





//-----------------------------------------------------------------------
/* Exercício 7
Leia as notas de quatro provas de um concurso: Matemática, Português, Conhecimentos Gerais e Informática. 
    Calcule e exiba a média ponderada, tendo Matemática com peso 2. */

/* let matemática = parseInt(prompt("digite a nota de Matematica !"))
let portugues = parseInt(prompt("digite a nota de portugues !"))
let conhecimentosGerais = parseInt(prompt("digite a nota em conhecimentos Gerais!"))
let informatica = parseInt(prompt("digite a nota de informatica !"))

let mediaPonderada = matemática * 2 + portugues * 2 + conhecimentosGerais * 3 + informatica * 4 / 11

alert(`A media ponderada é: ${mediaPonderada}`) */

//-----------------------------------------------------------------------

/* Exercício 8
Leia dois números inteiros (dividendo e divisor, respectivamente) e exiba a divisão, a divisão inteira e o resto da divisão destes números. */

/* let dividendo = parseInt(prompt("digite aqui um dividendo! "))
let divisor = parseInt(prompt("digite aqui um dividendo! "))

let calculoDivisao = dividendo / divisor
let restoDaDivisao = dividendo % divisor
alert(`a divisão inteira e o resto da divisão destes números são: ${calculoDivisao} e ${restoDaDivisao}`) */


//--------------------------------------------------------------------

/* Exercício 9
Fazer um algoritmo que possa entrar com o saldo de uma aplicação e ele imprima o novo saldo, considerando o reajuste de 1%. */

/* let saldo = parseInt(prompt("digite aqui um numero para novo saldo!"))

let calculoReajuste = saldo * 0.01
saldo = saldo + calculoReajuste
alert(`o novo saldo com reajuste é: ${saldo}`) */


//-----------------------------------------------------------------------
/*Exercício 10
Construir um aplicativo que calcule a área de um losango. Identificar quais serão as entradas necessárias. */
/* 
let diagonalD1 = parseInt(prompt("Digite aqui a primeira diagonal do losango!"))
let diagonald2 = parseInt(prompt("Digite aqui a segunda diagonal do losango!"))

let calculoArea = diagonalD1 * diagonald2 
let resultCalculoArea = calculoArea
calculoArea = calculoArea / 2

alert(`A area do losango é: ${calculoArea}`) */
