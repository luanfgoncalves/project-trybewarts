// --------------Requisito 3----------------

const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (event) => {
  const valorDoLogin = document.getElementById("eMail1").value;
  const valorDaSenha = document.getElementById("pass1").value;
  console.log('clique reconhecido')
  if (valorDoLogin === "tryber@teste.com" && valorDaSenha === "123456") {
    alert("Olá, Tryber!");
    console.log('Olá Tryber!');
    } else {
      alert("Email ou senha inválidos");
      console.log('Email ou senha inválidos');
    }
})


// --------------Requisito 18---------------

function check() {
  const agree = document.querySelector('#agreement').checked;
  const subimit = document.getElementById('submit-btn');

  if (agree === true) {
    subimit.removeAttribute('disabled');
  }
}
check();
