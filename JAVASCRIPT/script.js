const slots = [];
for (let i = 1; i <= 49; i++) {
  const slot = document.getElementById(`slot${i}`);
  if (slot) slots.push(slot);
}
const navios = [
  { id: 'navio', colocado: false, posicao: null },
  { id: 'navio1', colocado: false, posicao: null },
  { id: 'navio2', colocado: false, posicao: null },
  { id: 'navio3', colocado: false, posicao: null },
  { id: 'navio4', colocado: false, posicao: null },
  { id: 'navio5', colocado: false, posicao: null },
  { id: 'navio6', colocado: false, posicao: null }
];
navios.forEach(navio => {
  const elemento = document.getElementById(navio.id);
  if (elemento) {
    elemento.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', navio.id);
    });
  }
});
slots.forEach((slot, index) => {
  slot.addEventListener('dragover', (event) => {
    if (!slot.hasChildNodes()) {
      event.preventDefault();
    }
  });
  slot.addEventListener('drop', (event) => {
    event.preventDefault();
    if (slot.hasChildNodes()) return;

    const navioId = event.dataTransfer.getData('text/plain');
    const navioElemento = document.getElementById(navioId);

    if (navioElemento) {
      slot.appendChild(navioElemento);
      const navioInfo = navios.find(n => n.id === navioId);
      if (navioInfo) {
        navioInfo.colocado = true;
        navioInfo.posicao = index + 1;
        console.log(`${navioInfo.id} colocado no slot ${navioInfo.posicao}`);
      }
    }
  });
});
let dificuldade = 0
let verificacao = 0
let verificacao1 = 0
let verificacao2 = 0
const butaofacil = document.getElementById('b1')
const butaomedio = document.getElementById('b2')
const butaodificil = document.getElementById('b3')
butaofacil.addEventListener('click',function(){
  if(verificacao != 1){
    butaofacil.style.backgroundColor = 'rgb(64, 206, 51)'
    butaofacil.style.scale = '1.2'
    verificacao = 1
    verificacao1 = 0
    butaomedio.style.backgroundColor = 'rgb(223, 32, 32)'
    butaomedio.style.scale = '1'
    dificuldade = 1
    butaodificil.style.backgroundColor = 'rgb(223, 32, 32)'
    butaodificil.style.scale = '1'
    verificacao2 = 0
  }
  else{
    butaofacil.style.backgroundColor = 'rgb(223, 32, 32)'
    butaofacil.style.scale = '1'
    verificacao = 0
    dificuldade = 0
  }
});
butaomedio.addEventListener('click',function(){
  if(verificacao1 != 1){
    butaomedio.style.backgroundColor = 'rgb(64, 206, 51)'
    butaomedio.style.scale = '1.2'
    verificacao1 = 1
    verificacao = 0
    butaofacil.style.backgroundColor = 'rgb(223, 32, 32)'
    butaofacil.style.scale = '1'
    dificuldade = 2
    butaodificil.style.backgroundColor = 'rgb(223, 32, 32)'
    butaodificil.style.scale = '1'
    verificacao2 = 0
  }
  else{
    butaomedio.style.backgroundColor = 'rgb(223, 32, 32)'
    butaomedio.style.scale = '1'
    verificacao1 = 0
    dificuldade = 0
    
  }
});
butaodificil.addEventListener('click',function(){
  if(verificacao2 != 1){
    butaodificil.style.backgroundColor = 'rgb(64, 206, 51)'
    butaodificil.style.scale = '1.2'
    verificacao1 = 0
    verificacao = 0
    verificacao2 = 1
    butaofacil.style.backgroundColor = 'rgb(223, 32, 32)'
    butaofacil.style.scale = '1'
    butaomedio.style.backgroundColor = 'rgb(223, 32, 32)'
    butaomedio.style.scale = '1'
    dificuldade = 3
  }
  else{
    butaodificil.style.backgroundColor = 'rgb(223, 32, 32)'
    butaodificil.style.scale = '1'
    verificacao2 = 0
    dificuldade = 0
  }
});
const iniciar = document.getElementById('iniciar')
const navio = navios.find(n => n.id === 'navio');
const navio1 = navios.find(n => n.id === 'navio1');
const navio2 = navios.find(n => n.id === 'navio2');
const navio3 = navios.find(n => n.id === 'navio3');
const navio4 = navios.find(n => n.id === 'navio4');
const navio5 = navios.find(n => n.id === 'navio5');
const navio6 = navios.find(n => n.id === 'navio6');
function mostrarPopup(mensagem) {
  const popup = document.getElementById('popup-alert');
  popup.textContent = mensagem;
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
    window.location.href = '../HTML/jogo.html';
  }, 5000);
}