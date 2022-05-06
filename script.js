// --------------Requisito 18---------------

function check() {
  const agree = document.querySelector('#agreement').checked;
  const subimit = document.getElementById('submit-btn');

  if (agree === true) {
    subimit.removeAttribute('disabled');
  }
}
check();
