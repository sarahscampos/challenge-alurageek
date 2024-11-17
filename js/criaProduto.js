import { conectaApi } from "./conectaApi.js";
import listaProdutos from "./mostraProdutos.js";


const formulario = document.querySelector('[data-formulario]');
const botaoLimpar = document.querySelector('[data-limpar]');

async function criaProduto(evento) {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const valor = document.querySelector("[data-valor]").value;

  try {
    await conectaApi.postProduto(nome, valor, imagem);
    alert("Produto adicionado com sucesso!");
    listaProdutos();
  }
  catch(error) {
    alert("Erro ao adicionar produto: " + error.message);
    
  }
}

botaoLimpar.addEventListener("click", (evento) => {
  evento.preventDefault();
  formulario.reset();
})


formulario.addEventListener("submit", evento => {
  criaProduto(evento);
});