/* Tarefas
Exercício 1
Declare uma variável chamada “meuNome”, que irá armazenar uma string com o seu nome;
Em seguida, utilize a propriedade length para obter a quantidade de caracteres que o seu nome possui, e armazene esse valor em uma variável chamada “comprimentoMeuNome”;
Para finalizar, imprima o seguinte no console do seu navegador: “O meu nome possui _quantidade-caracteres_ caracteres de comprimento.”, utilizado as variáveis declaradas anteriormente. */

/* let meuNome = "Leonardo"
let comprimentoMeuNome = meuNome.length

console.log(comprimentoMeuNome)
 */

/* 
Exercício 2
Declare uma variável “preco”, que sempre irá receber um valor numérico inteiro - você pode inicializar essa variável com o valor 15;
Declare uma variável chamada “precoFormatado”
;
Formate o valor da variável “preco” no seguinte formato: “R$0,00” e armazene o resultado na variável “precoFormatado”;

Para finalizar, imprima o seguinte no console do seu navegador: “O valor _preco-inicial-inteiro_ formatado ficaria assim: _preco-formatado_”, utilizando as variáveis declaradas anteriormente por você.
 */
/* 
let preco = 15
let precoFormatado = 

 */


/* 
Exercício 3
Declare uma variável chamada “cumprimento”, e armazene o seguinte valor em string: “Bom dia”;
Declare uma variável chamada “nome”, e armazene um nome qualquer em string;
Declare uma variável chamada “sobrenome”, e armazene um sobrenome qualquer em string;
Utilize as variáveis declaradas anteriormente para criar uma mensagem de cumprimento no seguinte formato: “Bom dia, João Silva”;
Armazene a mensagem em uma nova variável chamada “mensagemCumprimento”;
Para finalizar, imprima o resultado no console do seu navegador. */

let cumprimento = “Bom dia”;
let nome = "Leonardo"
let sobrenome = "Gomes"

let mensagemCumprimento = (`${cumprimento} ${nome} ${sobrenome}`)

console.log(mensagemCumprimento)
