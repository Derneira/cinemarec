const filmes = [
  { titulo: 'Esqueceram de Mim', categoria: 'Comédia', ingressos: 30, poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/93/93/95/20287484.jpg' },
  { titulo: 'Quem Vai Ficar com Mary?', categoria: 'Comédia', ingressos: 30, poster: 'https://m.media-amazon.com/images/I/6190Nk0Ao4L._AC_UF1000,1000_QL80_.jpg' },
  { titulo: 'Superbad: É Hoje', categoria: 'Comédia', ingressos: 30, poster: 'https://m.media-amazon.com/images/S/pv-target-images/c6ccc71674fda242f1bd68320813a51c0bda21bb0f5b0df5d634a6708d3d34e3.jpg' },
  { titulo: 'Meninas Malvadas', categoria: 'Comédia', ingressos: 30, poster: 'https://br.web.img3.acsta.net/r_1280_720/img/6a/c0/6ac066a363320f867308155b4d9d96c9.jpg' },
  { titulo: 'Se Beber, Não Case!', categoria: 'Comédia', ingressos: 30, poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/29/37/19874003.jpg' },
  { titulo: 'As Branquelas', categoria: 'Comédia', ingressos: 30, poster: 'https://assets.cinebelasartes.com.br/wp-content/uploads/2018/06/as-branquelas-min.jpg' },
  { titulo: 'Missão Madrinha de Casamento', categoria: 'Comédia', ingressos: 30, poster: 'https://i.pinimg.com/originals/51/14/a3/5114a3d7fb1c4ddc73fe9400b87e6db8.jpg' },
  { titulo: 'O Exorcista', categoria: 'Terror', ingressos: 30, poster: 'https://br.web.img2.acsta.net/pictures/23/10/05/21/13/1431520.jpg' },
  { titulo: 'O Iluminado', categoria: 'Terror', ingressos: 30, poster: 'https://http2.mlstatic.com/D_NQ_NP_991098-MLB26580587391_122017-O.webp' },
  { titulo: 'Invocação do Mal', categoria: 'Terror', ingressos: 30, poster: 'https://br.web.img3.acsta.net/c_310_420/pictures/210/166/21016629_2013062820083878.jpg' },
  { titulo: 'Hereditário', categoria: 'Terror', ingressos: 30, poster: 'https://br.web.img3.acsta.net/pictures/18/06/14/13/11/1751062.jpg' },
  { titulo: 'Corra!', categoria: 'Terror', ingressos: 30, poster: 'https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg' },
  { titulo: 'A Bruxa', categoria: 'Terror', ingressos: 30, poster: 'https://br.web.img3.acsta.net/pictures/15/09/15/21/05/589902.jpg' },
  { titulo: 'It: A Coisa', categoria: 'Terror', ingressos: 30, poster: 'https://a-static.mlcdn.com.br/450x450/poster-cartaz-it-a-coisa-capitulo-dois-b-pop-arte-poster/poparteskins2/15938533095/c17763305ccec7276096e944500fd696.jpeg' },
  { titulo: 'Titanic', categoria: 'Romance', ingressos: 30, poster: 'https://img.elo7.com.br/product/original/3A58314/poster-cartaz-adesivo-decorativo-titanic-42-5x60cm-decoracao.jpg' },
  { titulo: 'Diário de uma Paixão', categoria: 'Romance', ingressos: 30, poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/21/92/20135014.jpg' },
  { titulo: 'Simplesmente Acontece', categoria: 'Romance', ingressos: 30, poster: 'https://br.web.img3.acsta.net/pictures/14/12/11/15/29/051042.jpg' },
  { titulo: 'La La Land: Cantando Estações', categoria: 'Romance', ingressos: 30, poster: 'https://br.web.img3.acsta.net/c_310_420/pictures/17/01/24/17/13/228823.jpg' },
  { titulo: '500 Dias com Ela', categoria: 'Romance', ingressos: 30, poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/87/30/15/20028674.jpg' },
  { titulo: 'Como Eu Era Antes de Você', categoria: 'Romance', ingressos: 30, poster: 'https://a-static.mlcdn.com.br/450x450/poster-cartaz-como-eu-era-antes-de-voce-pop-arte-poster/poparteskins2/15938534087/83b647d5efe7fd6f0a8f7842d094d509.jpeg' },
];

const itensPorPagina = 7;
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

  // Reorganiza filmesFiltrados para que os resultados correspondentes à busca apareçam no topo da lista
  const filmesCorrespondentes = filmesFiltrados.filter(filme =>
    filme.titulo.toLowerCase().includes(termoBusca) && filme.categoria.toLowerCase().includes(termoBusca)
  );

  const outrosFilmes = filmesFiltrados.filter(filme =>
    !filme.titulo.toLowerCase().includes(termoBusca) || !filme.categoria.toLowerCase().includes(termoBusca)
  );

  const filmesOrdenados = [...filmesCorrespondentes, ...outrosFilmes];

  paginaAtual = 1;
  renderizarFilmes(paginaAtual, filmesOrdenados);
  renderizarPaginacao();
}

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
