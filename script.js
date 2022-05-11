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
