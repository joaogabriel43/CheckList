// Importa as funções verificarListaComprados e verificarListaVazia de seus respectivos arquivos
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

// Seleciona as listas de compras e de itens comprados do DOM
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

// Função que exclui um item da lista
const excluirItem = (elemento) => {
    // Solicita confirmação do usuário para excluir o item
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

    if (confirmacao) {
        // Remove o item do DOM
        elemento.remove();

        // Verifica se as listas estão vazias e atualiza a exibição
        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

// Exporta a função excluirItem para ser usada em outros arquivos
export { excluirItem };