import { conectaApi } from "./conectaApi.js";

const produtoContainer = document.querySelector("[data-container]");
const conteudo = document.querySelector("[data-conteudo]");

function constroiCard(nome, valor, imagem, id) {
  const card = document.createElement("div");
  card.className = "produtos__card";
  card.innerHTML = `<img src="${imagem}" alt="${nome}" class="card__imagem">
          <p class="card__titulo">${nome}</p>
          <div class="card__infos">
            <p>$ ${valor}</p>
            <button class="botao-delete" data-id="${id}"><img src="../img/icon _trash 2_.svg" alt="ícone lixeira" data-id="${id}" class="botao-delete"></button>
          </div>`

  return card;
}

export default async function listaProdutos() {
  try {
    const listaApi = await conectaApi.getProdutos();
    listaApi.forEach(elemento => produtoContainer.appendChild(
      constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id)
    ));
    if(listaApi.length === 0) {
      conteudo.classList.add("nenhum-produto");
      conteudo.innerText = "Nenhum produto foi adicionado";
    }
  }
    catch {
      conteudo.classList.add("nenhum-produto");
      conteudo.innerText = "Não foi possível carregar a lista de produtos";
    }
  
}

listaProdutos();

