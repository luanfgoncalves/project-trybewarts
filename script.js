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

// document.getElementById('text').addEventListener('keypress', calcCharacter())

function calcCharacter() {
let texto = document.getElementById('text').maxLength;
let texto2 = document.getElementById('text').value.length;
let cont = document.getElementById('counter').innerText
let number = parseInt(cont)

  let newNumber = (number - texto2);
  
}