// --------------Requisito 3----------------
window.onload = pegarValorDeInput()
function pegarValorDeInput() {
  const valorDoLogin = document.getElementById("eMail1").value;
  const valorDaSenha = document.getElementById("pass1").value;

  if (valorDoLogin === "tryber@teste.com" && valorDaSenha === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos");
  }
}


// --------------Requisito 18---------------

function check() {
  const agree = document.querySelector('#agreement').checked;
  const subimit = document.getElementById('submit-btn');

  if (agree === true) {
    subimit.removeAttribute('disabled');
  }
}
check();
