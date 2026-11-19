function atualizarCarrinho(){

    const carrinho =
        document.getElementById(
            "carrinho"
        );

    const totalPedido =
        document.getElementById(
            "totalPedido"
        );

    if(!carrinho){
        return;
    }

    let html = "";
    let total = 0;

    pedidoAtual.itens.forEach(

        (item,index)=>{

            total += item.valor;

            html += `
            <div class="item">

                <b>${item.descricao}</b>

                <br>

                ${item.ingredientes || ""}

                <br>
            `;

            if(
                item.adicionais &&
                item.adicionais.length
            ){

                html += `
                <br>
                <b>Adicionais:</b>
                <br>
                ${item.adicionais.join("<br>")}
                `;
            }

            if(
                item.observacao
            ){

                html += `
                <br>
                <b>Obs:</b>
                ${item.observacao}
                `;
            }

            html += `
                <br><br>

                Valor:
                R$ ${item.valor.toFixed(2)}

                <br><br>

                <button
                onclick="removerItem(${index})">
                Excluir
                </button>

            </div>
            `;
        }
    );

    carrinho.innerHTML =
        html;

    pedidoAtual.total =
        total;

    if(totalPedido){

        totalPedido.innerText =
            total.toFixed(2);
    }
}
