/* Tarefas

Exercício 1
Declare uma variável chamada “nome”;
Essa variável vai receber um valor do tipo string: o seu nome;
Em seguida, imprima o seguinte no console: “Olá, eu sou a / o _seu - nome - aqui_”, utilizando a variável declarada anteriormente. */

/* let nome = "Leonardo"
console.log(`Ola eu sou o ${nome}`)


/* ---------------------------------------------------------------------------------------------------------------- */
/*  Exercício 2
Declare duas variáveis, uma chamada “nome” e outra chamada “sobrenome”;
As duas vão receber um valor do tipo string.Na primeira atribua o seu nome, e na segunda atribua o seu sobrenome;
Para finalizar, imprima o seguinte no console: “Olá, eu me chamo _seu - nome - aqui_ _seu - sobrenome - aqui_”, utilizando as variáveis declaradas anteriormente.  */

/*     let nome ="Leonardo"
    let sobrenome = "Gomes"
     
    console.log(`Olá, eu me chamo ${nome} ${sobrenome}`) */




/* ---------------------------------------------------------------------------------------------------------------- */

/*  Exercício 3
Declare três variáveis.Uma chamada “primeiroNome” (string), outra chamada “segundoNome” (string), e uma chamada “idade” (number);
Atribua os devidos valores para cada uma das variáveis, seguindo a tipagem predefinida para cada uma;

Para finalizar, imprima o seguinte no console: “Olá, meu primeiro nome é _seu - primeiro - nome_, meu segundo nome é _seu - segundo - nome_, e eu tenho _sua - idade - aqui_ anos.”, utilizando as variáveis declaradas anteriormente. */

/* let primeiroNome = "Leonardo"
let segundoNome = "Gomes"
let idade  = 36

console.log(`Olá,meu primeiro nome é:${primeiroNome}, meu segundo nome é:${segundoNome}, e eu tenho ${idade}anos.`) */


/* ---------------------------------------------------------------------------------------------------------------- */
/* Exercício 4
Declare duas variáveis. “preco1” e “preco2”;
Ambas vão receber valores numéricos de sua escolha;
Declare uma terceira variável chamada "precoTotal", que também vai receber um valor numérico;

Utilize as duas variáveis criadas anteriormente para realizar uma soma, e atribua essa soma para a variável "precoTotal";
Para finalizar, imprima o seguinte no console: “Comprei uma xícara por _preço - da - xícara_ reais, e dois copos por _preço - dos - copos_ reais.No total, gastei _total - gasto_ reais.”, utilizando as variáveis declaradas por você. */

/* let preco1 = 20
let preco2 = 20
let precoTotal = preco1 + preco2
console.log(`Comprei uma xícara por ${preco1}, e dois copos por ${preco2} reais. No total, gastei ${precoTotal} reais.`) */
/* ---------------------------------------------------------------------------------------------------------------- */
/* 
Exercício 5
Declare duas variáveis. “numero1” e “numero2”;
Ambas vão receber valores numéricos de sua escolha;

Declare mais uma variável, que também vai receber um valor numérico, e atribua para ela a soma das variáveis “numero1” e “numero2”;
Para finalizar, imprima o seguinte o console: “A soma do valor _primeiro - numero - somado_ com o valor _segundo - numero - somado_ é igual a _total - soma_”, utilizando as variáveis declaradas anteriormente. */


/* let numero1 = 10
let numero2 = 10
let somaNumeros = numero1 + numero2

console.log(`A soma do valor ${numero1} com o valor ${numero2} é igual a ${somaNumeros}`)
 */


/* ---------------------------------------------------------------------------------------------------------------- */

/*   Exercício 6
Declare uma variável chamada “contador”;

A variável “contador” irá receber valores numéricos e deverá ser inicializada com o valor 0;
Some 1 no valor dessa variável, até que ela chegue em 5;
A cada soma, imprima o valor no console do seu navegador.

    Observação: o objetivo desse exercício é praticar a utilização das variáveis, portanto não utilize estruturas de repetição. */
 

let contador = 0
contador = contador +1
console.log(contador)

contador = contador +1
console.log(contador)



/* ---------------------------------------------------------------------------------------------------------------- */

/*     //Exercício 7
Declare uma variável chamada “anoAtual” e atribua a ela o ano atual;
Declare uma variável chamada “anoNascimento”, e atribua o ano do seu nascimento;

Utilize as variáveis declaradas anteriormente para realizar o cálculo necessário para obter a sua idade atual, e armazene o resultado em uma terceira variável, chamada “idadeAtual”;

Em seguida, retorne o seguinte no console: “No ano _ano - atual_, eu tenho / vou ter _sua - idade_ anos de idade”, utilizando as variáveis declaradas por você. */


/* let anoAtual = 2022
let anoNascimento = 1986
let idadeAtual = anoAtual - anoNascimento

console.log(`No ano ${anoAtual}, eu tenho / vou ter ${idadeAtual}anos de idade`). */


/* ---------------------------------------------------------------------------------------------------------------- */

/* Exercício 8
Declare uma variável chamada “alturaRetangulo” e atribua a ela o valor 5 - ela representa o valor do lado de um retângulo;
Declare uma variável chamada “larguraRetangulo” e atribua a ela o valor 7 - ela representa o valor de outro lado do retângulo;

Realize o cálculo necessário para obter a área total desse retângulo, e armazene o resultado em uma terceira variável, chamada “areaRetangulo”;
Para finalizar, imprima a seguinte mensagem no console do navegador: “Um retângulo com largura de _largura - retangulo_cm e altura de _altura - retangulo_cm possui _area - retangulo_cm² de área total.”, utilizando as variáveis declaradas anteriormente por você. */

/* 
let alturaRetangulo = 5;
let larguraRetangulo = 7;
let areaRetangulo = alturaRetangulo * larguraRetangulo

console.log(`Um retângulo com ${larguraRetangulo}cm e ${alturaRetangulo}cm possui ${areaRetangulo}cm² de área total.`) */


/* ---------------------------------------------------------------------------------------------------------------- */
//Exercício 9
/* 
Declare uma variável chamada “diaAtual”, que irá armazenar o dia de hoje;
Declare uma variável chamada “mesAtual”, que irá armazenar o mês atual, em valor numérico;
Declare uma variável chamada “anoAtual”, que irá armazenar o ano atual;
Declare uma quarta variável chamada “dataAtualFormatada”;
Utilize as variáveis declaradas anteriormente para montar a data completa de hoje no formato dd / mm / aa;

Armazene a data formatada na variável “dataAtualFormatada”;
Para finalizar, imprima o resultado no console do navegador, com a seguinte mensagem: “A data de hoje é _data - completa_”. */ 

/* let diaAtual = 09
let mesAtual = 10
let anoAtual = 2022
let dataAtualFormatada = `${diaAtual} / ${mesAtual} / ${anoAtual}`

console.log(`A data de hoje é ${dataAtualFormatada}`) */






 //-------------------------------------------------------------------------------------------------------------- 
/* Exercício 10
Declare uma variável chamada “valorA”, que irá receber um valor numérico de sua escolha;
Declare uma variável chamada “valorB”, que também irá receber um valor numérico de sua escolha;
Inverta os valores das variáveis, ou seja, a variável “valorA” deverá receber o valor da variável “valorB” e vice - versa;

Para finalizar, imprima os valores no console da seguinte forma: “Antes a variável "valorA" possuía o valor _valor - anterior_, agora possui o valor _valor - atual_.”, e faça o mesmo para a variável "valorB" utilizando as variáveis declaradas por você.  */

let valorA = 10
let valorB = 15

let auxiliarA = valorA
let auxiliarB = valorB


console.log(`Antes a variável "valorA" possuía o valor ${valorA}, agora possui o valor ${auxiliarB}.`)


