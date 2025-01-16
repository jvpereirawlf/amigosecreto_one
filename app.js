
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let amigos = [];

function adicionarAmigo() {
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert('Por favor, insira um nome válido!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);

    atualizarLista();
    inputAmigo.value = '';
    inputAmigo.focus();
}

function atualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        const buttonRemover = document.createElement('button');
        buttonRemover.textContent = 'Remover';
        buttonRemover.classList.add('button-remove');
        buttonRemover.onclick = () => removerAmigo(index);

        li.appendChild(buttonRemover);
        listaAmigos.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia! Adicione nomes antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}
