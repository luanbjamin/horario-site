function carregar () {
    let mensagem = window.document.getElementById('mensagem');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours()
    let minutos = data.getMinutes();
    let section = window.document.querySelector('section');
    let audioPlayer = window.document.getElementById('audioPlayer');
    let playPauseButton = window.document.getElementById('playPauseButton');
    let minutosFormatados = minutos < 10 ? '0' + minutos : minutos;

    const musicas = {

        madrugada: 'musicas/musica-madrugada.mp3',
        manha: 'musicas/musica-manha-01.mp3',
        tarde: 'musicas/musica-tarde-03.mp3',
        noite: 'musicas/musica-noite.mp3'
    };

    let musicaAtual = '';

    if (hora >= 0 && hora < 5) {
        mensagem.innerHTML = `Agora são ${hora} horas e ${minutosFormatados} minutos. <br> Boa Madrugada!`
        img.src = 'imagens/foto-madrugada.png'
        document.body.style.background = '#002143'
        section.style.background = '#010f01'
        musicaAtual = 'musicas/musica-madrugada.mp3'

    } else if (hora >= 5 && hora < 12) {
        mensagem.innerHTML = `<strong>Agora são ${hora} horas e ${minutosFormatados} minutos</strong>. <br> Bom Dia!`
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#d2c19c'
        section.style.background = '#38893d'
        musicaAtual = 'musicas/musica-manha-01.mp3'

    } else if (hora >= 12 && hora <= 17 ) {
        mensagem.innerHTML = `Agora são ${hora} horas e ${minutosFormatados} minutos. <br> Boa Tarde!`
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#ffc067'
        section.style.background = '#4a2652'
        musicaAtual = 'musicas/musica-tarde-03.mp3'

    } else {
        mensagem.innerHTML = `Agora são ${hora} horas e ${minutosFormatados} minutos. <br> Boa Noite!`
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#515154'
        section.style.background = '#25303f'
        musicaAtual = 'musicas/musica-noite.mp3'
    }
        

        audioPlayer.src = musicaAtual;
        audioPlayer.load();

        audioPlayer.muted = true;
        audioPlayer.play().catch(error => {
            console.log("Tentativa de autoplay inicial (mutado) falhou ou outro erro:", error);
        });

        if(playPauseButton && !playPauseButton.hasAttribute('data-listener-added')) {
            playPauseButton.addEventListener('click', () => {   
                if (audioPlayer.paused || audioPlayer.ended) {
                    audioPlayer.muted = false;
                
                    audioPlayer.play()
                        .then(() => {
                            playPauseButton.textContent = 'recomece';
                        })

                        .catch(error => {
                            console.log("Erro ao tocar música após clique:", error);
                        });
                } else {
                    audioPlayer.pause();
                    playPauseButton.textContent = 'sintonize';
                }
            });
            playPauseButton.setAttribute('data-listener-added', 'true');
        
        }
}