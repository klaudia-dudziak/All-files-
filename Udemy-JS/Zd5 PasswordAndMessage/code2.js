const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "wiosna", "ania"];
const messages = ["wyjechałam </3 ", "piękna pora roku", "hello"];

const showMessage = () => {
    div.textContent = ' ';
    for( let i=0; i < passwords.length; i++ ) {
      if( input.value === passwords[i]) {
      div.textContent = messages[i];
      }
  }
}
input.addEventListener('input', showMessage);
