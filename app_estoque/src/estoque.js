let produtos = [];

function criarProduto(id,nome,qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p;
}

function adicionarProduto(p){
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function removerProduto(id){
    produtos = produtos.filter((p) =>{
        return p.id != id;
    });
}

function editarProduto(id, qtd){
    produtos = produtos.filter((p) =>{
        if(p.id == id){
        return p.qtd = qtd;
        }
    });
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};
