var carta1 = {
    nome: "Nyarlatothep",
    imagem: "https://i.imgur.com/L7gAb3U.jpg",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    atributos: {
        Ataque: 80,
        Defesa: 80,
        Magia: 90,
    }
}

var carta2 = {
    nome: "Azathoth",
    imagem: "https://i.imgur.com/Lo505oV.jpg",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    atributos: {
        Ataque: 100,
        Defesa: 100,
        Magia: 100,
    }
}

var carta3 = {
    nome: "Yog-Sothoth",
    imagem: "https://i.imgur.com/XBx3HfP.jpg",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    atributos: {
        Ataque: 88,
        Defesa: 90,
        Magia: 93,
    }
}

var carta4 = {
    nome: "Shub-Niggurath",
    imagem: "https://i.imgur.com/lky2Ura.jpg",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    atributos: {
        Ataque: 95,
        Defesa: 90,
        Magia: 90,
    }
}

var carta5 = {
    nome: "Cthulhu",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    imagem: "https://i.imgur.com/6zf4bGI.jpg",
    atributos: {
        Ataque: 87,
        Defesa: 80,
        Magia: 89,
    }
}

var carta6 = {
    nome: "Shoggoth",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    imagem: "https://i.imgur.com/dGtEPrM.jpg",
    atributos: {
        Ataque: 77,
        Defesa: 79,
        Magia: 70,
    }
}

var carta7 = {
    nome: "Yig",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    imagem: "https://i.imgur.com/bH07M1K.jpg",
    atributos: {
        Ataque: 81,
        Defesa: 78,
        Magia: 89,
    }
}

var carta8 = {
    nome: "Dagon",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    imagem: "https://i.imgur.com/75QsGer.jpg",
    atributos: {
        Ataque: 87,
        Defesa: 80,
        Magia: 89,
    }
}

var carta9 = {
    nome: "Hastur",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    imagem: "https://i.imgur.com/KRiHAbf.jpg",
    atributos: {
        Ataque: 89,
        Defesa: 86,
        Magia: 90,
    }
}

var carta10 = {
    nome: "Mi-Go",
    audio: "https://www.myinstants.com/media/sounds/es_swell-thick-eerie-sfx-producer.mp3",
    imagem: "https://i.imgur.com/mRELLnX.jpg",
    atributos: {
        Ataque: 60,
        Defesa: 69,
        Magia: 73,
    }
}


var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 10)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 10)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador()
    
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"           style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`
  
  var opcoesTexto = "" 
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  
  var html = "<div id= 'opcoes' class = 'carta-status'>"
  
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  
  
}



function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        var msg = '<p class="resultado-final">Vencedor!</p>' 
        var audio = `<audio autoplay src="${cartaJogador.audio}"></audio>`
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        var msg = '<p class="resultado-final">Perdedor...</p>' 
        var audio = `<audio autoplay src="${cartaJogador.audio}"></audio>`
    } else {
        var msg = '<p class="resultado-final">Empatou!</p>' 
        var audio = `<audio autoplay src="${cartaJogador.audio}"></audio>`
    }
    divResultado.innerHTML = msg + audio
    exibeCartaMaquina() 
}

function exibeCartaMaquina() {
  
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"           style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`
  
  var opcoesTexto = "" 
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
  
  var html = "<div id= 'opcoes' class = 'carta-status'>"
  
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  
  
}


//NO CSS, adicionei no wrapper duas linhas para centralizar as cartas: align-items: center; justify-content: center