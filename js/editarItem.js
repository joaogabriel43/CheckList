// Importa a função gerarDiaDaSemana do arquivo gerarDiaDaSemana.js
import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";

// Função que edita um item da lista
export const editarItem = (elemento) => {
    // Solicita ao usuário um novo nome para o item
    let novoItem = prompt("Digite o novo nome do item:");

    // Verifica se o novo nome não é nulo ou vazio
    if (novoItem !== null && novoItem.trim() !== "") {
        // Atualiza o texto do item com o novo nome
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        // Verifica se o item estava marcado como comprado
        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if (estavaComprado) {
            // Atualiza o estado visual do item para comprado
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }

        // Atualiza a data de criação para a data em que foi editado
        const dataDeCriacao = elemento.querySelector(".texto-data");
        dataDeCriacao.textContent = gerarDiaDaSemana();
    }
}