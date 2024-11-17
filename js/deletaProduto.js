import { conectaApi } from "./conectaApi.js";

const conteudo = document.querySelector("[data-conteudo]");

document.addEventListener("click", async (event) => {
  if (event.target.classList.contains("botao-delete")) {
    const id = event.target.getAttribute("data-id");
    try {
      await conectaApi.deleteProduto(id);
      alert("Produto excluído com sucesso!");
      event.target.closest(".produtos__card").remove(); // Remove o card do DOM
      const listaApi = await conectaApi.getProdutos();
      if(listaApi.length === 0) {
        conteudo.classList.add("nenhum-produto");
        conteudo.innerText = "Nenhum produto foi adicionado";
      }
    } catch (error) {
      alert("Erro ao excluir produto: " + error.message);
    }
  }
});