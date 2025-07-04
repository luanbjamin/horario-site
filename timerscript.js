function carregar () {
    let mensagem = window.document.getElementById('mensagem')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let section = document.querySelector('section')

    if (hora >= 0 && hora < 5) {
        mensagem.innerHTML = `Agora são ${hora} horas. <br> Boa Madrugada!`
        img.scr = 'imagens/foto-madrugada.png'
        document.body.style.background = '#002143'
        section.style.background = '#010f01'

    } else if (hora > 5 && hora < 12) {
        mensagem.innerHTML = `Agora são ${hora} horas. <br> Bom Dia!`
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#d2c19c'
        section.style.background = '#38893d'

    } else if (hora >= 12 && hora <= 18 ) {
        mensagem.innerHTML = `Agora são ${hora} horas. <br> Boa Tarde!`
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#ffc067'
        section.style.background = '#4a2652'

    } else {
        mensagem.innerHTML = `Agora são ${hora} horas. <br> Boa Noite!`
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#515154'
        section.style.background = '#25303f'
    }
}