const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const passwordList = [...passwords];
const div = document.querySelector('div')

const  showPassword = (e) => {
    passwords.forEach((password, i) => {
    if(password.toLowerCase() === e.target.value.toLowerCase()) {
        div.textContent = messages[i];
    }
  })
}
input.addEventListener('input', showPassword)
