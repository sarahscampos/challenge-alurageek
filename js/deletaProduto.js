import { conectaApi } from "./conectaApi.js";

document.addEventListener("click", async (event) => {
  if (event.target.classList.contains("botao-delete")) {
    const id = event.target.getAttribute("data-id");
    try {
      await conectaApi.deleteProduto(id);
      alert("Produto excluído com sucesso!");
      event.target.closest(".produtos__card").remove(); // Remove o card do DOM
    } catch (error) {
      alert("Erro ao excluir produto: " + error.message);
    }
  }
});