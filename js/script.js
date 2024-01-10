// ativa o link selecionado do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ativa os itens selecionados no orçamento

const paramentros = new URLSearchParams(location.href);

function ativarParametrosProdutoSelecionado(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

paramentros.forEach(ativarParametrosProdutoSelecionado);
