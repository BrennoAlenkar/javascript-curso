
function IniciarContagem() {
    let res = document.querySelector('.res').innerHTML;
    let audio = document.querySelector('.som');
    tempo = setInterval(() => {
        let cronometro = document.querySelector('.res').innerHTML;
        cronometro = parseInt(cronometro) - 1;
        if (cronometro === 0) {
            document.querySelector('.res').innerHTML = 'Tempo Esgotado, Descanso!'
            audio.play();
            pararContagem()
            
        } else {
            document.querySelector('.res').innerHTML = cronometro;
        }


    }, 1000);
}

function pararContagem() {
    clearInterval(tempo)
}

function zerarContagem() {
    location.reload()
}