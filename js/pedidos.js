let pedidoAtual = {
    cliente: "",
    telefone: "",
    endereco: "",
    observacao: "",
    itens: [],
    total: 0
};

function adicionarItem(item) {

    pedidoAtual.itens.push(item);

    calcularTotal();
}

function removerItem(indice) {

    pedidoAtual.itens.splice(indice, 1);

    calcularTotal();
}

function limparPedido() {

    pedidoAtual.itens = [];

    pedidoAtual.total = 0;

    calcularTotal();
}

function calcularTotal() {

    let total = 0;

    pedidoAtual.itens.forEach(item => {

        total += item.valor;

    });

    pedidoAtual.total = total;

    return total;
}
