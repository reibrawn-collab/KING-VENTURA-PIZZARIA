let historicoPedidos = [];

function salvarPedido(pedido) {

    historicoPedidos.push(pedido);

    localStorage.setItem(
        "historicoPedidos",
        JSON.stringify(historicoPedidos)
    );
}

function carregarHistorico() {

    const dados =
        localStorage.getItem(
            "historicoPedidos"
        );

    if (dados) {

        historicoPedidos =
            JSON.parse(dados);

    }
}
