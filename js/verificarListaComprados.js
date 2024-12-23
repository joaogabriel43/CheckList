// Seleciona o container da lista de itens comprados do DOM
const containerListaComprados = document.getElementById("container-lista-comprados");

// Função que verifica se há itens comprados e exibe/esconde o container da lista de itens comprados
export function verificarListaComprados(lista) {
    if (lista.childElementCount === 0) {
        containerListaComprados.style.display = "none";
    } else {
        containerListaComprados.style.display = "block";
    }
}