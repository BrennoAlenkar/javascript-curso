
function IniciarContagem() {
    let res = document.querySelector('.res').innerHTML;
    let audio = document.querySelector('.som');
    let img = document.querySelector('.img');

    tempo = setInterval(() => {
        let cronometro = document.querySelector('.res').innerHTML;

        cronometro = parseInt(cronometro) - 1;

        if (cronometro === 0) {
            document.querySelector('.res').innerHTML = 'Descanço'
            audio.play();
            pararContagem()
            img.style.display = 'block'
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