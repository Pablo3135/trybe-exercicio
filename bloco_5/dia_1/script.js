function meta () {
let meta = document.getElementById("meta")
console.log(meta.innerText = "Eu me vejo daqui a dois anos formado na Trybe e com uma boa remuneração para assim poder pagalos");
};
meta()

function cor (){
let cor = document.getElementsByClassName("main-content")[0]
cor.style.background = "rgb(76,164,109)"
}
cor()

function cor2 () {
let cor2 = document.getElementsByClassName("center-content")[0]
cor2.style.background = "White"
}
cor2()

function corrigir () {
    let correção = document.getElementsByTagName("h1")[0]
    console.log(correção.innerText = "Exercício 5.1 - JavaEscripit")
}
corrigir()

