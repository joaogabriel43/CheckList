// Importa as funções criarItemDaLista e verificarListaVazia de seus respectivos arquivos
import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

// Seleciona o campo de entrada de item e a lista de compras do DOM
const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

// Função que adiciona um item à lista de compras
export function adicionarItem(evento) {
    evento.preventDefault(); // Previne o comportamento padrão do formulário

    // Verifica se o campo de entrada está vazio
    if (item.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    // Cria um novo item da lista e o adiciona à lista de compras
    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);

    // Verifica se a lista está vazia e limpa o campo de entrada
    verificarListaVazia(listaDeCompras);
    item.value = "";
}