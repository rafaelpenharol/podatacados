let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    // Adiciona o produto ao carrinho
    carrinho.push({ nome, preco });

    // Atualiza a exibição do carrinho
    atualizarCarrinho();

    // Mostra uma mensagem de confirmação
    alert(`${nome} foi adicionado ao carrinho!`);
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const total = document.getElementById('total');

    // Limpa a lista do carrinho antes de atualizá-la
    listaCarrinho.innerHTML = '';

    let totalPreco = 0;

    // Adiciona cada item ao carrinho visual
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        totalPreco += item.preco;
    });

    // Atualiza o total
    total.textContent = `Total: R$ ${totalPreco.toFixed(2)}`;
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    let mensagem = 'Meu Pedido:\n\n';
    carrinho.forEach(item => {
        mensagem += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });
    mensagem += `\nTotal: R$ ${carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2)}`;

    // Redireciona para o WhatsApp com o número 5563981442123
    const url = `https://wa.me/5563981442123?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
