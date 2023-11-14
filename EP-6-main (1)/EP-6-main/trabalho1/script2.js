const imagemDinamica = document.getElementById('imagem-dinamica');
const botaoMudarImagem = document.getElementById('botao-mudar-imagem');
let imagemAtual = 1;

botaoMudarImagem.addEventListener('click', () => {
  if (imagemAtual === 1) {
    imagemDinamica.src = 'img/1.png';
    imagemAtual = 2;
  } else {
    imagemDinamica.src = 'img/2.png';
    imagemAtual = 1;
  }
});