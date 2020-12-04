//Desafio 1 

/*
let n1 = 7
let n2 = 8
let soma = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let divisão = n1 / n2
let mód = n1 % n2
console.log (soma, sub, mult, divisão, mód)
*/

//Desafio 2

/*
let number1 = 1.5
let number2 = 1

if (number1 > number2){
    console.log ("Number one é maior")
}else{
    console.log ("Number two é maior")
}
*/

//Desafio 3 
/*
let number1 = 4
let number2 = 3
let number3 = 5

if (number1 > number2 && number1 > number3){
    console.log("Number one e maior")
}else if(number2 > number1 && number2 > number3){
    console.log("Number two é maior")
}else {
    console.log("Number tree é maior")
}
*/

//Desafio 4
/*
let valor = "-"
switch (valor) {
    case "+":
        console.log("Valor positivo")
    break
    case "-":
        console.log("Valor Negativo")
    break;
    default:
        console.log("0")
}
*/

//Desafio 5
/*
let triangulo1 = 70
let triangulo2 = 60
let triangulo3 = 60
let soma = triangulo1 + triangulo2 + triangulo3

if (soma === 180){
     console.log(true)
 }else{
     console.log(false)
 }
 */

 //Desafio 6 
/*
let nome = "CALANGO"

if(nome === "peão" || nome === "PEÃO"){
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento")
}else if (nome === "cavalo" || nome ==="CAVALO"){
    console.log("Única peça que pode saltar sobre as outras peças do tabuleiro e seu movimento é em L.")
}else if (nome === "bispo" || nome ==="BISPO"){
    console.log("Move-se na diagonal, quantas casas quiser")
}else if (nome === "torre" || nome ==="TORRE"){
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
}else if (nome === "dama" || nome === "DAMA"){
    console.log("pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
}else if (nome === "rei" || nome === "REI"){
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.")
}else {
    console.log("ERRO")
}
*/

//Desafio 7
/*
let porcentagem = -2

if(porcentagem > 100 || porcentagem < 0){
    console.log("ERRO")
}else if(porcentagem >= 90 && porcentagem <= 100){
    console.log("A")
}else if(porcentagem >= 80 && porcentagem < 90){
    console.log("B")
}else if(porcentagem >= 70 && porcentagem < 80){
    console.log("C")
}else if(porcentagem >= 60 && porcentagem < 70){
    console.log("D")
}else if(porcentagem >= 50 && porcentagem < 60){
    console.log("E")
}else{
    console.log("F")
}
*/

//Desafio 8
/*
let number1 = 2
let number2 = 5
let number3 = 3

if(number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0){
    console.log(true)
}else{
    console.log(false)
}
*/

//Desafio 9
/*
let number1 = 102
let number2 = 10
let number3 = 2

if(number1 % 2 != 0 || number2 % 2 != 0 || number3 % 2 != 0){
    console.log(true)
}else{
    console.log(false)
}
*/