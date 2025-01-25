let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    if (!produto || produto.trim() === '') {
alert(' Selecione um produto válido.');
return;
}

if (isNaN(quantidade) || quantidade <= 0) {
    alert(' Insira uma quantidade válida.');
    return;
}
    let nomeProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let preco = quantidade * valor;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
       totalGeral = totalGeral + preco;
       let campototal = document.getElementById('valor-total');
       campototal.textContent = `R$ ${totalGeral}`;
       document.getElementById('quantidade').value = '';

}
function limpar() {
 totalGeral = 0;
 document.getElementById('lista-produtos').innerHTML = '';
 document.getElementById('valor-total').textContent = 'R$ 0';
        
}
