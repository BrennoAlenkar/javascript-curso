

function somarNumeros() {
    let res = document.querySelector('.teste');
    let nome = document.getElementById('nome').value;
    res.innerHTML = `Olá ${nome}, seu nome tem ${nome.toUpperCase()} letras`
}