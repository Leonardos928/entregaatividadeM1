/* let states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia'
]
for (let i = 0; i < states.length; i++) {
    console.log(states[i])
}
 */



//-------------------------------------------------------------------------------
//Que tal se quiséssemos apenas imprimir estado, sim, estado não? Como poderíamos mudar nosso loop? Bem, e se o incrementador (o último parâmetro passado para o for) incrementar de dois em dois ao invés de um em um?

/* let states1 = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia'
] */

/* for (let i = 0; i < states1.length; i += 2) {
    console.log(states1[i])
}
 */
//Que tal imprimir os itens do array em ordem inversa? Primeiro, vamos voltar nosso incrementador para como estava antes:
     
let states2 = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia'
]
for (let i = 0; i < states2.length; i++) {
    console.log(states2[states2.length - i])
}      

//------------------------------------------------------------------------------------