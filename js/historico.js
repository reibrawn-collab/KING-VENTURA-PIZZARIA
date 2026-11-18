let historicoPedidos = [];

function carregarHistorico() {

    const dados =
        localStorage.getItem(
            "historicoPedidos"
        );

    if (dados) {

        historicoPedidos =
            JSON.parse(
                dados
            );

    }
}

function salvarHistorico() {

    localStorage.setItem(
        "historicoPedidos",
        JSON.stringify(
            historicoPedidos
        )
    );
}

function gerarNumeroPedido() {

    let numero = Number(
        localStorage.getItem(
            "ultimoPedido"
        ) || 0
    );

    numero++;

    localStorage.setItem(
        "ultimoPedido",
        numero
    );

    return (
        "KV" +
        String(numero)
        .padStart(4, "0")
    );
}

function registrarPedido(
    pedido
) {

    pedido.numero =
        gerarNumeroPedido();

    pedido.data =
        new Date()
        .toLocaleString(
            "pt-BR"
        );

    historicoPedidos.push(
        pedido
    );

    salvarHistorico();
}

carregarHistorico();
