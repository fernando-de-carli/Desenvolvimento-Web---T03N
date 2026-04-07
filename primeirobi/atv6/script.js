const input = document.querySelector('#campoTarefa');
const botao = document.querySelector('#btnAdicionar');
const lista = document.querySelector('#listaTarefas');

botao.onclick = function() {
    const texto = input.value;

    if (texto.trim() === "") return;

    const novoItem = document.createElement('li');

    novoItem.textContent = texto;

    lista.appendChild(novoItem);
t
    input.value = "";
    input.focus();


lista.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
};