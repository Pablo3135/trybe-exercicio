//exercico 1

let h1 = document.createElement("h1")
h1.innerText = "Exercício 5.2 - JavaScript DOM"
document.body.appendChild(h1)

// exercicio 2

let div = document.createElement("div");
div.className = "main-content";
document.body.appendChild(div)

//exercicio 3

let divfilho = document.createElement("div")
divfilho.className = "center-content"
div.appendChild(divfilho)

//exercicio 4

let p = document.createElement("p")
p.innerText = "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galé do tipo e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Ele foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum."
divfilho.appendChild(p)

//exercicio 5 

let divfilho2 = document.createElement("div")
divfilho2.className = "left-content"
div.appendChild(divfilho2)

//exercicio 6

let divfilho3 = document.createElement("div")
divfilho3.className = "right-content"
div.appendChild(divfilho3)

//exercicio 7

let imagem = document.createElement("img")
imagem.className = "small-image"
imagem.src = "https://picsum.photos/200"
divfilho2.appendChild(imagem)

//exercicio 8

let list = document.createElement("ul")
divfilho3.appendChild(list)
let listItem = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
for(let num in listItem){
    let li = document.createElement("li")
    li.innerText = listItem[num]
    list.appendChild(li)
}

//exercico 9

for(let i = 0; i <= 3; i += 1){
    let h3 = document.createElement("h3")
    h3.innerText = 'shoow', i
    div.appendChild(h3)
}

//exercicio 10

let title= document.getElementsByTagName("h1")[0]
    title.className = "title"

//exercicio 11

let element = document.getElementsByTagName("h3")
for(let num in element){
    element[num].className = "description"
}

//exercicio 12

let divpai = document.querySelector(".left-content")
divpai.remove()

//exercicio 13

let centralizar = document.querySelector(".right-content")
centralizar.style.marginRight = "auto"

//exercicio 14

let fundoCor = document.querySelector(".center-content")
fundoCor.style.background = "green"

//exercicio 15

list.lastChild.remove()
list.lastChild.remove()
