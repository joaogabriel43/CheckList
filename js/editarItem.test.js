const { test, expect } = require('@jest/globals');

test('editar item deve atualizar o valor corretamente', () => {
    const item = { id: 1, nome: 'Item Original' };
    const novoValor = 'Item Atualizado';
    const editarItem = (item, novoValor) => {
        item.nome = novoValor;
        return item;
    };
    const resultado = editarItem(item, novoValor);
    expect(resultado.nome).toBe(novoValor);
});