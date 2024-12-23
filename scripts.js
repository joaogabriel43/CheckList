// Importa as funções adicionarItem e verificarListaComprados de seus respectivos arquivos
import { adicionarItem } from "./js/adicionarItem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";

// Seleciona o botão de salvar item do DOM e adiciona um evento de clique para adicionar um item
const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

// Seleciona a lista de itens comprados do DOM e verifica se há itens comprados
const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);