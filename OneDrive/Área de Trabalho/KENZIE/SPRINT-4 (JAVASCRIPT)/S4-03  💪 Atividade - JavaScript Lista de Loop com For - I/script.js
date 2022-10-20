/* 1) Escreva uma função chamada renderUpToHundred. 

Quando a função for chamada, os números de 0 a 100, devem ser impressos no console.

Exemplo de:

chamada da função: renderUpToHundred()
saída: 0,1,2,3,4,5...100 */


/* function renderUpToHundred() {
    for (let i = 0; i <= 100; i++) {
        console.log(i)
    }
}
console.log(renderUpToHundred()) */


//-------------------------------------------------------
/* 2) Escreva uma função chamada tenInTenToAHundred(). Quando a função for chamada, os números de 10 a 100, contando de 10 em 10, devem ser impressos no console.

Exemplo:
Chamada da função: ⁠tenInTenToAHundred()
Saída: 10 ,20 ,30 ,40 ,50... 100
 */

/* function tenInTenToAHundred() {
    for (let i = 0; i <= 100; i+=10) {
        console.log(i)
    }

}
console.log(tenInTenToAHundred())  */


//-----------------------------------------------------
/* 3) Escreva uma função chamada oddUpToAHundred(). Quando a função for chamada, apresente os valores 0 a 100, mas somente os valores que forem ímpares no console.

Exemplo:
Chamada da função: oddUpToAHundred()
Saída: 1 ,3 ,5 ,7 ,9 ...99
 */

/* function oddUpToAHundred() {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 1) {
            console.log("Esse sao os numeros impares: "+ i)
        }
    }
}
oddUpToAHundred() */



//-------------------------------------------------------
/* 4) Escreva uma função chamada evenUpToAHundred(). Quando a função for chamada, apresente os valores de 0 a 100, mas somente os valores pares no console.

Exemplo:
Chamada da função: evenUpToAHundred()
Saída: 0 ,2 ,4 ,6 , 8 ...100 */

/* function evenUpToAHundred() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log("Esses sãos os numeros pares: " + i)
        }

    }
}
evenUpToAHundred() */


//-----------------------------------------------------------
/* 5) Escreva uma função chamada fromNegativeToPositive(). 

Quando a função for chamada, apresente os valores de -10 a 0.

Exemplo:
Chamada da função: fromNegativeToPositive()
Saída: -10, -9, -8, -7 ...0 */





//-------------------------------------------------------------
/* 6) Escreva uma função chamada inDescendingDirection. Quando a função for chamada, apresente valores de 10 a 0 no console.

Exemplo:
Chamada da função: inDescendingDirection()
Saída: 10, 9, 8, 7 ...0 */


/* function inDescendingDirection() {
    for (let i = 10; i >= 0; i--) {
        console.log(i)

    }
}
inDescendingDirection() */





//-------------------------------------------------------------
/* 7) Escreva uma função chamada inDescendingDirectionTenOutOfTen(). Quando a função for chamada, apresente valores de 100 a 10 a cada 10 no console.

Exemplo:
Chamada da função: inDescendingDirectionTenOutOfTen()
Saída: 100 ,90 ,80, 70...10 */

/* function indescendingDirectionTenOutOfTen() {
    for (let i = 0; i <= 100; i += 10) {

    }


}

indescendingDirectionTenOutOfTen()
 */





//-------------------------------------------------------------
/* 8) Escreva uma função chamada divisibleByTwoUpToTen(). Quando a função for chamada, apresente valores de 1 a 10 divididos por 2 no console.

Exemplo:
Chamada da função: divisibleByTwoUpToTen()
Saída: 0,2,4,6,8...10 */

/* function divisibleByTwoUpToTen() {

    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log("Esses sãos os numeros: " + i)
        }
    }
}
divisibleByTwoUpToTen() */



//------------------------------------------------------------
/* 9) Escreva uma função chamada toSquare(). Quando a função for chamada, apresente o quadrado dos valores da sequência de 1 a 10.

Exemplo:
Chamada da função: toSquare()
Saída: 0,1,2,9,16...100 */

function toSquare(){
    let toSquare = ""

    for (let i = 0; i <= 50; i++) {
        toSquare += (`${i *1}  `)
        
}
    return toSquare
}
console.log(toSquare())




//-------------------------------------------------------------
/* 10) Escreva uma função chamada toExponent(). Quando a função for chamada, apresente o expoente dos valores da sequência de 1 a 10 no console.

Exemplo:
Chamada da função: toExponent().
Saída: 1,1,4,27...10000000000 */