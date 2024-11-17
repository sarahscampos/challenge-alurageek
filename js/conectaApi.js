async function getProdutos() {
  const produtosResponse = await fetch('http://localhost:3000/produtos');
  const produtosJson = await produtosResponse.json();
  return produtosJson;
}

async function postProduto(nome, valor, imagem) {
  const produtosResponse = await fetch('http://localhost:3000/produtos', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      valor: valor,
      imagem: imagem
    })
  });
  if(!produtosResponse.ok) {
    throw new Error("Não foi possível publicar o produto");
  }
  const produtosJson = await produtosResponse.json();
  return produtosJson;
}

async function deleteProduto(id) {
  const produtosResponse = await fetch(`http://localhost:3000/produtos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  });

  if (!produtosResponse.ok) {
    throw new Error("Não foi possível deletar o produto");
  }

  return "Produto deletado com sucesso";
}

export const conectaApi = {
  getProdutos,
  postProduto,
  deleteProduto
}