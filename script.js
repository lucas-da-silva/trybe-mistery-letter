const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const p = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');
let cont = 0;


const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

// Create Class and random
function addClass() {
  const estilo1 = estilo[parseInt(Math.random() * (estilo.length))];
  const tamanho1 = tamanho[parseInt(Math.random() * (tamanho.length))];
  const rotacao1 = rotacao[parseInt(Math.random() * (rotacao.length))];
  const inclinacao1 = inclinacao[parseInt(Math.random() * (inclinacao.length))];
  const s = ' ';

  const conjunto = estilo1 + s + tamanho1 + s + rotacao1 + s + inclinacao1;
  return conjunto;
}

// Create element span and test if input is not '' or ' '
function createSpan() {
  cont = 0;

  if (input.value === '' || input.value === ' ') {
    p.innerText = 'Por favor, digite o conteúdo da carta.';
  }

  const separete = input.value.split(' ');

  for (let index = 0; index < separete.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = separete[index];
    span.className = addClass();
    p.appendChild(span);
    cont += 1;
  }
}

function clickSpan() {
  const spans = document.querySelectorAll('span');
  for (let i = 0; i < spans.length; i += 1) {
    spans[i].addEventListener('click', () => {
      spans[i].className = addClass();
    })
  }
}

// Click event that executes the function and clears the paragraph
button.addEventListener('click', () => {
  p.innerHTML = '';
  createSpan();
  contador.innerText = cont;
  clickSpan();
});
