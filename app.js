// Seleção dos elementos do DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Lista de nomes adicionados
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Remove espaços extras do início e fim

    if (nome === "") {
        alert('Por favor, insira um nome válido!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);

    // Atualiza a lista visível
    atualizarLista();
    inputAmigo.value = ''; // Limpa o campo de entrada
    inputAmigo.focus(); // Foca novamente no campo de entrada
}

// Função para atualizar a exibição da lista
function atualizarLista() {
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizá-la
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        // Botão para remover um nome da lista
        const buttonRemover = document.createElement('button');
        buttonRemover.textContent = 'Remover';
        buttonRemover.classList.add('button-remove');
        buttonRemover.onclick = () => removerAmigo(index);

        li.appendChild(buttonRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo pelo índice
    atualizarLista(); // Atualiza a exibição
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia! Adicione nomes antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Índice aleatório
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}