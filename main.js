const form = document.getElementById("form");
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const mensagemErro = document.querySelector('.error-message');
const mensagemSucesso = document.querySelector('.success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(numeroA.value);
    const valorB = parseFloat(numeroB.value);

    if (valorB > valorA) {
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
    } else {
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    }
})