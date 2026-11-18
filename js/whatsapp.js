const NUMERO_WHATSAPP = "5567991476156";

function gerarMensagemWhatsApp(pedido) {

    let mensagem = [];

    mensagem.push(
        "KING VENTURA PIZZARIA"
    );

    mensagem.push("");

    mensagem.push(
        "Cliente: " +
        pedido.cliente
    );

    mensagem.push(
        "Telefone: " +
        pedido.telefone
    );

    mensagem.push(
        "Endereço: " +
        pedido.endereco
    );

    mensagem.push("");

    mensagem.push("ITENS:");

    pedido.itens.forEach(
    item => {

        mensagem.push(
            "- " +
            item.descricao
        );

        if(
            item.ingredientes
        ){

            mensagem.push(
                "Ingredientes:"
            );

            mensagem.push(
                item.ingredientes
            );
        }

        mensagem.push("");

    }
);
            );

        }
    );

    mensagem.push("");

    mensagem.push(
        "TOTAL: R$ " +
        pedido.total
    );

    return mensagem.join(
        "\n"
    );
}
