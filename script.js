const filmes = [
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
  { titulo: '', categoria: '', ingressos: 30, poster: '' },
];

const itensPorPagina = 5;
let paginaAtual = 1;

function renderizarFilmes(pagina) {
  const containerFilmes = document.getElementById('container-filmes');
  containerFilmes.innerHTML = '';

  const indiceInicio = (pagina - 1) * itensPorPagina;
  const indiceFim = indiceInicio + itensPorPagina;
  const filmesExibidos = filmes.slice(indiceInicio, indiceFim);

  filmesExibidos.forEach(filme => {
    const containerFilme = document.createElement('div');
    containerFilme.classList.add('filme');
    containerFilme.innerHTML = `
      <img src="${filme.poster}" alt="Poster ${filme.titulo}" class="poster-filme">
      <div class="info-filme">
        <h2>${filme.titulo}</h2>
        <p>Categoria: ${filme.categoria}</p>
        <p>Ingressos disponíveis: ${filme.ingressos}</p>
        <button onclick="comprarIngresso(${indiceInicio + filmes.indexOf(filme)})">Comprar</button>
      </div>
    `;
    containerFilmes.appendChild(containerFilme);
  });
}

function comprarIngresso(indice) {
  if (filmes[indice].ingressos > 0) {
    filmes[indice].ingressos--;
    renderizarFilmes(paginaAtual);
  } else {
    alert('Ingressos esgotados!');
  }
}

function renderizarPaginacao() {
  const totalPaginas = Math.ceil(filmes.length / itensPorPagina);
  const paginacaoContainer = document.getElementById('paginacao');
  paginacaoContainer.innerHTML = '';

  for (let i = 1; i <= totalPaginas; i++) {
    const botao = document.createElement('button');
    botao.textContent = i;
    botao.addEventListener('click', () => {
      paginaAtual = i;
      renderizarFilmes(paginaAtual);
    });
    paginacaoContainer.appendChild(botao);
  }
}

function buscarFilmes() {
  const termoBusca = document.getElementById('barra-busca').value.toLowerCase();
  const filmesFiltrados = filmes.filter(filme =>
    filme.titulo.toLowerCase().includes(termoBusca) || filme.categoria.toLowerCase().includes(termoBusca)
  );

  paginaAtual = 1;
  renderizarFilmes(paginaAtual);
  renderizarPaginacao();

  if (filmesFiltrados.length === 0) {
    alert('Nenhum filme encontrado com o termo de busca fornecido.');
  }
}

// Adicionando evento para acionar a função buscarFilmes() ao pressionar Enter na barra de busca
document.getElementById('barra-busca').addEventListener('input', buscarFilmes);
document.getElementById('barra-busca').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    buscarFilmes();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderizarFilmes(paginaAtual);
  renderizarPaginacao();
});
