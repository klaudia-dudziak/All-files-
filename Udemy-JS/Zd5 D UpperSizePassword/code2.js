const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = () => {
    const lowerPasswords = passwords.map( password => password.toLowerCase());
    for( let i=0; i < lowerPasswords.length; i++ ) {
        if( input.value.toLowerCase() === lowerPasswords[i]) {
        div.textContent = messages[i];
        }
    }
}
input.addEventListener("input", showMessage)
 