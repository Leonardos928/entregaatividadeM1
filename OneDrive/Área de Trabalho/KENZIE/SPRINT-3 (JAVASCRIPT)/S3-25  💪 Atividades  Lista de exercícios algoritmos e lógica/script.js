/* Para concluir os exercícios a seguir:
Você deverá fazer uso do prompt() e do alert() para receber os valores e exibir os resultados, respectivamente.

Exemplo
Leia dois números inteiros, a e b, e faça com que eles troquem os valores entre si. Exiba os valores de a e b.
 */

/* let a = parseInt(prompt("Insira um valor para a"))
let b = parseInt(prompt("Insira um valor para b"))
let aux = 0
aux = a 
a = b
b = aux
alert(`Os valores originais de a e b: ${b}, ${a}. Após a troca são: ${a}, ${b}`) */

/* 

Exercício 1
Antes do racionamento de energia ser decretado, quase ninguém falava de quilowatts; mas agora, todos incorporaram essa palavra em seu vocabulário.

Sabendo que 100 quilowatts de energia custa um sétimo de salário mínimo, faça um aplicativo que:

Receba o valor do salário mínimo e a quantidade de quilowatts gasta por uma residência. Então, calcule e imprima:

O valor em reais de cada quilowatt;
O valor em reais a ser pago;
O novo valor a ser pago por essa residência com um desconto de 10%. */




/* let SalarioMinimo = parseInt(prompt("Digite aqui o valor do salario mínimo?"))
let valorKwts = parseInt(prompt("Digite aqui a quantidade de quilowatts !"))
 */








//------------------------------------------

/* Exercício 2
Em épocas de pouco dinheiro, os comerciantes estão procurando aumentar suas vendas oferecendo desconto.
Faça um aplicativo que possa receber o valor de um produto e imprima o novo valor tendo em vista que o desconto foi de 9%. */

/* let produto = parseInt(prompt("Digite aqui o valor do produto?"))

let descontoProduto = (produto *9 / 100)
let result = produto - descontoProduto
console.log(result)


alert(`Estamos felizer em te-lo como cliente e seu produto teve um DESCONTO o novo valor a PAGAR è: "R$${result}"`) */




//--------------------------------------

/* Exercício 3
Receber dois valores do tipo texto (String) e armazenar variáveis A e B.

Efetuar a troca dos valores de forma que a variável A passe a ter o valor da variável B e que a variável B passe a ter o valor da variável A.
Apresentar os valores trocados. */

/* let a = prompt("Digite aqui uma palavra")
let b = prompt("Digite aqui outra palavra")

let aux = ""
aux = a 
a = b
b = aux

alert(`Os valores originais de a e b: ${b}, ${a}. Após a troca: ${a}, ${b}`)  */


//-----------------------------------------
/*Exercício 4
Criar um aplicativo que leia a quantidade de fitas que uma locadora de vídeo possui e o valor que ela cobra por cada aluguel, mostrando as informações pedidas a seguir: 

Sabendo que um terço das fitas são alugadas por mês, exiba o faturamento anual da locadora;
Quando o cliente atrasa a entrega, é cobrada uma multa de 10% sobre o valor do aluguel. 
Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso, calcule o valor ganho com multas por mês;
Sabendo ainda que 2% das fitas se estragam ao longo do ano, e um décimo do total é comprado para reposição, exiba a quantidade de fitas que a locadora terá no final do ano.
*/









//----------------------------------------------
/* Exercício 5
Entrar com um número no formato CDU (centena, dezena e unidade) e exibi-lo de acordo com a seguinte saída:

Centenas:
Dezenas:
Unidades:
 */

/* let centenas = parseFloat(prompt("Digite um numero com Centena"))
let dezenas = parseFloat(prompt("Digite uma dezena"))
let unidades = parseFloat(prompt("Digite uma unidade"))

alert(`este numero é uma centena: ${centenas}, este é uma Dezena: ${dezenas}, este é uma unidade: R$${unidades}`) */





//---------------------------------------
/* Exercício 6

Entrar com um número no formato CDU (centena, dezena e unidade) e imprimi-lo invertido. 

Por exemplo, 123 sairá 321. O número deverá ser armazenado em outra variável antes de ser impresso.
 */

 









//------------------------------------
/* Exercício 7
Criar um aplicativo que, dado um número de conta corrente com três dígitos, retorne o seu dígito verificador. 

Para encontrar o dígito verificador, siga o exemplo do número 235:
Somar o número da conta com o seu inverso: 235 + 532 = 767;

Multiplicar cada dígito pela sua ordem posicional (da esquerda para a direita) 
e somar estes resultados: 7*1 + 6*2 + 7*3 = 40;
O último dígito desse resultado é o dígito verificador da conta: último dígito de 40 é 0. */
