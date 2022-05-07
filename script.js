// --------------Requisito 3----------------

const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', () => {
  const valorDoLogin = document.getElementById('eMail1').value;
  const valorDaSenha = document.getElementById('pass1').value;
  if (valorDoLogin === 'tryber@teste.com' && valorDaSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// --------------Requisito 18---------------

function check() {
  const agree = document.querySelector('#agreement').checked;
  const subimit = document.getElementById('submit-btn');

  if (agree === true) {
    subimit.removeAttribute('disabled');
  }
}
check();

// --------------Requisito 20---------------

const textarea = document.getElementById('textarea');

textarea.addEventListener('input', () => {
  const maxText = document.getElementById('textarea').maxLength;
  const texto = document.getElementById('textarea').value.length;
  const counter = document.getElementById('counter');
  const charNumber = maxText - texto;
  counter.textContent = charNumber;
});

// --------------Requisito 21---------------

const nome = document.getElementById('input-name');
const lastName = document.getElementById('input-last-name');
const mail = document.getElementById('input-email');
const casa1 = document.getElementById('gitnoria-house');
const casa2 = document.getElementById('reactpuff-house');
const casa3 = document.getElementById('corvinode-house');
const casa4 = document.getElementById('pytherina-house');
const family1 = document.getElementsByClassName('radio')[0];
const family2 = document.getElementsByClassName('radio')[1];
const family3 = document.getElementsByClassName('radio')[2];
const learn1 = document.getElementsByClassName('subject')[0];
const learn2 = document.getElementsByClassName('subject')[1];
const learn3 = document.getElementsByClassName('subject')[2];
const learn4 = document.getElementsByClassName('subject')[3];
const learn5 = document.getElementsByClassName('subject')[4];
const learn6 = document.getElementsByClassName('subject')[5];
const evaluation = document.getElementsByClassName('radio2');

