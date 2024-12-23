// Seleciona a mensagem de lista vazia do DOM
const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

// Função que verifica se a lista está vazia e exibe/esconde a mensagem de lista vazia
export function verificarListaVazia(lista) {
    if (lista.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}