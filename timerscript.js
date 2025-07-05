function carregar() {
    let mensagem = window.document.getElementById('mensagem');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours()
    let minutos = data.getMinutes();
    let section = window.document.querySelector('section');
    let audioPlayer = window.document.getElementById('audioPlayer');
    let playPauseButton = window.document.getElementById('playPauseButton'); 
    let minutosFormatados = minutos < 10 ? '0' + minutos : minutos;

    const periodData = {
        madrugada: {
            message: `<strong>Agora são ${hora} horas e ${minutosFormatados} minutos. <br> Boa Madrugada!</strong>`,
            image: 'imagens/foto-madrugada.png',
            bodyBg: '#002143',
            sectionBg: '#010f01',
            music: 'musicas/musica-madrugada.mp3',
            buttonClass: 'button-madrugada'
        },

        manha: {
            message: `<strong>Agora são ${hora} horas e ${minutosFormatados} minutos. <br> Bom Dia!</strong>`,
            image: 'imagens/foto-manha.png',
            bodyBg: '#d2c19c',
            sectionBg: '#38893d',
            music: 'musicas/musica-manha-01.mp3',
            buttonClass: 'button-manha'
        },

        tarde: {
            message: `<strong>Agora são ${hora} horas e ${minutosFormatados} minutos. <br> Boa Tarde!</strong>`,
            image: 'imagens/foto-tarde.png',
            bodyBg: '#ffc067',
            sectionBg: '#4a2652',
            music: 'musicas/musica-tarde-03.mp3',
            buttonClass: 'button-tarde'
        },

        noite: {
            message: `<strong>Agora são: ${hora} horas e ${minutosFormatados} minutos. <br> Boa Noite!</strong>`,
            image: 'imagens/foto-noite.png',
            bodyBg: '#515154',
            sectionBg: '#25303f',
            music: 'musicas/musica-noite.mp3',
            buttonClass: 'button-noite'
        }
    };

    let currentPeriod;

    if (hora >= 0 && hora < 5) {
        currentPeriod = periodData.madrugada;
    } else if (hora >= 5 && hora < 12) {
        currentPeriod = periodData.manha;
    } else if (hora >= 12 && hora <= 17) {
        currentPeriod = periodData.tarde;
    } else {
        currentPeriod = periodData.noite;
    }

    mensagem.innerHTML = currentPeriod.message;
    img.src = currentPeriod.image;
    document.body.style.background = currentPeriod.bodyBg;
    section.style.background = currentPeriod.sectionBg;
    audioPlayer.src = currentPeriod.music;
    audioPlayer.load();

    audioPlayer.muted = true;
    audioPlayer.play().catch(error => {
        console.warn("Aviso: Autoplay inicial (mutado) pode ter sido bloqueado ou houve outro erro:", error);
        console.warn("Isso é comum em navegadores modernos. A reprodução completa dependerá do clique do usuário.");
    });

    if (playPauseButton) {
        playPauseButton.classList.remove('button-madrugada', 'button-manha', 'button-tarde', 'button-noite');
        playPauseButton.classList.add(currentPeriod.buttonClass);

        if (!playPauseButton.hasAttribute('data-listener-added')) {
            playPauseButton.addEventListener('click', () => {
                if (audioPlayer.paused || audioPlayer.ended) {
                    audioPlayer.muted = false;
                    audioPlayer.play()
                        .then(() => {
                            playPauseButton.textContent = 'github.com/luanbjamin';
                            console.log("Música tocando após clique do usuário.");
                        })
                        .catch(error => {
                            console.error("Erro ao tocar música após clique do usuário:", error);
                            alert("Não foi possível tocar a música. Verifique o console para mais detalhes ou tente novamente.");
                        });
                } else {
                    audioPlayer.pause();
                    playPauseButton.textContent = 'sintonize';
                    console.log("Música pausada.");
                }
            });
            playPauseButton.setAttribute('data-listener-added', 'true');
        } else {
            console.info("Listener do botão de play/pause já adicionado. Ignorando.");
        }
    } else {
        console.error("Erro: Botão 'playPauseButton' não encontrado no DOM. Verifique seu HTML.");
    } 
}