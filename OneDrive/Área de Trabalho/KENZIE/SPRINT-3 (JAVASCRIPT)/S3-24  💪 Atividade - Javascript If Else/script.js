/* 💪 Atividade - Javascript: If/Else

Exercício 1
Crie uma variável chamada "usuarioAutenticado”;
Atribua à variável "usuarioAutenticado” o valor true (Boolean);
Utilizando a estrutura de condição if, avalie se o usuário está autenticado; caso sim, imprima no console “Seja bem-vindo”. */
/* 
let usuarioAutenticado = "true"

if(usuarioAutenticado){
    console.log(`Seja bem vindo`)
}else{
    console.log(`Volte outra hora`)
}
 */



//------------------------------------------------
/* Exercício 2

Crie uma variável chamada "usuario” e atribua à variável "usuario” o valor “Ana” (String);
Crie uma variável chamada "autenticado” e atribua à variável "autenticado” o valor false (Boolean);

Utilizando a estrutura de condição if e os operadores lógicos, 
análise se o usuário existe e é autenticado; caso sim, imprima: "Olá _usuario_, você está autenticado“ */


/* let usuario = "Ana"
let autenticado = false

if (autenticado) {
    console.log(`Olá ${usuario}, você está autenticado.`)
} else {
    console.log(`${usuario}, voce nao esta autenticado.`)
}
 */

//-------------------------------------------------
/* Exercício 3

Crie uma variável chamada “produto”: atribua à variável “produto” o valor “maçã” (String);
Crie uma variável chamada “quantidadeDoProduto”: atribua à variável “quantidadeDoProduto” o valor 2 (Int);
Crie uma variável chamada “quantidadeFaltandoParaPromocao”: atribua à variável “quantidadeFaltandoParaPromocao” o valor (5 - quantidadeDoProduto), ou seja, cinco menos o valor da variável “quantidadeDoProduto”;

Realize a seguinte comparação, utilizando if:
Se o produto for "maçã" e a quantidade do produto for igual ou maior que 5 imprima:

“Você recebeu uma promoção, o valor do produto será R$ 5.00”
    ----> Se não, utilizando o else, imprima:
“Se você adicionar mais quantidade_restante_ de_maçãs, o valor sairá por R$ 5.00" */

let produto = "maça"
let quantidadeDoProduto = 2
let quantidadeFaltandoParaPromocao = 5 - quantidadeDoProduto



if(quantidadeDoProduto >= 5){
    console.log(`Você recebeu uma promoção, o valor do produto será R$ 5.00`)
}else{
    console.log(`Se você adicionar mais ${quantidadeFaltandoParaPromocao}, o valor sairá por R$ 5.00`)
}
 