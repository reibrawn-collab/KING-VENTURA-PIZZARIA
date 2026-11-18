let historicoPedidos = [];

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

function salvarHistorico() {

    localStorage.setItem(
        "historicoPedidos",
        JSON.stringify(
            historicoPedidos
        )
    );
}

function adicionarAoHistorico(
    pedido
) {

    historicoPedidos.push(
        pedido
    );

    salvarHistorico();
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

carregarHistorico();
