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

// Ativa as perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPerguntaClick(e) {
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function ativaEventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPerguntaClick);
}

perguntas.forEach(ativaEventoPerguntas);

// Galeria de bicicletas --> página de cada bicicleta única
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(e) {
  const img = e.currentTarget;
  const media = matchMedia("(max-width: 1000px)").matches;

  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
} else {
  
}
