const NUMERO_WHATSAPP = "5567991476156";

function enviarWhatsApp(pedido) {

    let mensagem =
        "KING VENTURA PIZZARIA\n\n";

    mensagem +=
        "Cliente: " +
        pedido.cliente +
        "\n";

    mensagem +=
        "Telefone: " +
        pedido.telefone +
        "\n";

    mensagem +=
        "Endereço: " +
        pedido.endereco +
        "\n\n";

    mensagem +=
        "ITENS:\n";

    pedido.itens.forEach(
        item => {

            mensagem +=
                item.descricao +
                " - R$ " +
                item.valor.toFixed(2) +
                "\n";

        }
    );

    mensagem +=
        "\nTOTAL: R$ " +
        pedido.total.toFixed(2);

    window.open(
        "https://wa.me/" +
        NUMERO_WHATSAPP +
        "?text=" +
        encodeURIComponent(
            mensagem
        )
    );
}
