let lista = [
    {
        nome: "Relogio",
        tipo: "paintings",
        valor: 99.90,
        imagem: "./painting/clock.jpg",
    },

    {
        nome: "Console Game",
        tipo: "paintings",
        valor: 29.90,
        imagem: "./painting/gamepad.jpg",
    },

    {
        nome: "Robô",
        tipo: "paintings",
        valor: 39.90,
        imagem: "./painting/personagem.jpg",
    },

    {
        nome: "Ipad",
        tipo: "paintings",
        valor: 2999.90,
        imagem: "./painting/ipad.jpg",
    },

    {
        nome: "Iphoe",
        tipo: "paintings",
        valor: 12229.90,
        imagem: "./painting/iphone.webp",
    },
    {
        nome: "Goku",
        tipo: "figures",
        valor: 59.90,
        imagem: "./actions/goku.jpg",
    },

    {
        nome: "Anime",
        tipo: "figures",
        valor: 99.90,
        imagem: "./actions/animewoman.jpg",
    },

    {
        nome: "StarWars",
        tipo: "figures",
        valor: 69.90,
        imagem: "./actions/starwarspersonagem.jpg",
    },

    {
        nome: "Naruto",
        tipo: "figures",
        valor: 59.90,
        imagem: "./actions/naruto.jpg",
    },

    {
        nome: "StarWars",
        tipo: "figures",
        valor: 99.90,
        imagem: "./actions/star.jpg",
    },
]




let figures = []
let paintings = []

function imagens(list) {
    for (let i = 0; i < list.length; i++) {
        let img = lista[i].tipo
        if (img == "figures") {
            figures.push(lista[i])
        } else {
            paintings.push(lista[i])
        }

    }
}
imagens(lista)
console.log(figures)



let sessaoPaintings = document.querySelector(".secao_painting")
let sessaoFrames = document.querySelector(".secao_figure")

function criarCards(secao, ul) {

    ul.innerHTML = ""

    for (let i = 0; i < secao.length; i++) {
        let cards = secao[i]

        let card = document.createElement("li")
        card.classList.add("secao_painting")

        let img = document.createElement("img")
        img.src = cards.imagem
        img.alt = cards.nome
        img.classList.add("img")
        card.appendChild(img)

        let nome = document.createElement("h2")
        let preco = document.createElement("h2")
        nome.innerText = cards.nome
        preco.innerText = cards.valor

        card.append(nome, preco)

        ul.appendChild(card)

    }
}
console.log(criarCards(lista, sessaoPaintings))
criarCards(paintings, sessaoPaintings )
criarCards(figures, sessaoFrames)
