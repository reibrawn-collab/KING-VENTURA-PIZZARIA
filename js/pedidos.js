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
    atualizarCarrinho();
}

function removerItem(indice) {
    pedidoAtual.itens.splice(indice, 1);
    atualizarCarrinho();
}

function limparPedido() {
    pedidoAtual.itens = [];
    atualizarCarrinho();
}

function atualizarCarrinho() {

    const carrinho =
        document.getElementById("carrinho");

    const totalPedido =
        document.getElementById("totalPedido");

    if (!carrinho) return;

    let html = "";
    let total = 0;

    pedidoAtual.itens.forEach(
        (item, index) => {

            total += Number(item.valor);

            html += `
            <div class="item">
                <b>${item.descricao}</b><br>

                ${item.ingredientes || ""}<br>

                ${item.observacao || ""}<br><br>

                Valor: R$ ${Number(item.valor).toFixed(2)}

                <br><br>

                <button
                    onclick="removerItem(${index})">
                    Excluir
                </button>
            </div>
            `;
        }
    );

    carrinho.innerHTML = html;

    pedidoAtual.total = total;

    if (totalPedido) {
        totalPedido.innerText =
            total.toFixed(2);
    }
}
