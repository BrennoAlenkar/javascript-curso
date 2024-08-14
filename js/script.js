

function somarNumeros() {
    let res = document.querySelector('.teste');
    let nome = document.getElementById('nome').value;
    nome = nome.toLowerCase();

    if (nome === 'brenno alencar') {
        res.innerHTML = 'Melhor programador que Existe!'
    } else {
        res.innerHTML = 'Voce consegue! nao desista.'
    }

}