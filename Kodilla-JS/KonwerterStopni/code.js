const celInput = document.querySelector('input.inputCelsjusz');
const celBtn= document.querySelector('button.conwertCelsjusz');
const showCel= document.querySelector('div.showCel');
const infoCel= document.querySelector('div.infoCel');
const fahrInput = document.querySelector('input.inputFahrenheit');
const fahrBtn = document.querySelector('button.conwertFahrenheit');
const showFahr= document.querySelector('div.showFahr');
const infoFahr= document.querySelector('div.infoFahr');

const celsjuszConwerter = () => {
    const conwertedCelsjusz = (celInput.value * 1.8) + 32
    showCel.textContent = conwertedCelsjusz.toFixed(2) + "°F";
    if(conwertedCelsjusz <= 32) {
        infoCel.textContent = "Ubierz grubą kurtkę i czapkę!"
    } else if(conwertedCelsjusz > 32 && conwertedCelsjusz <= 59) {
        infoCel.textContent = "Ubierz długie spodnie i bluzę."
    }else if (conwertedCelsjusz > 59 && conwertedCelsjusz <= 86) {
        infoCel.textContent = "Ubierz bluzkę z krótkim rękawem i okulary przeciwsłoneczne." 
    } else { infoCel.textContent = "Ubierz strój kąpielowy i idz na plażę!" }
    if(celInput.value === "") {
        infoCel.textContent = "";
        showCel.textContent = "";
    }
    celInput.addEventListener('input',celsjuszConwerter)
}  
celBtn.addEventListener('click', celsjuszConwerter);

const fahrenheitConwerter = () => {
    const conwertedFahrenheit = (fahrInput.value - 32) / 1.8;
    showFahr.textContent = conwertedFahrenheit.toFixed(2) + "°C";
    if(conwertedFahrenheit <= 0) {
        infoFahr.textContent = "Ubierz grubą kurtkę i czapkę!"
    } else if(conwertedFahrenheit > 0 && conwertedFahrenheit <= 15) {
        infoFahr.textContent = "Ubierz długie spodnie i bluzę."
    }else if (conwertedFahrenheit > 15 && conwertedFahrenheit <= 30) {
        infoFahr.textContent = "Ubierz bluzkę z krótkim rękawem i okulary przeciwsłoneczne." 
    } else { infoFahr.textContent = "Ubierz strój kąpielowy i idz na plażę!" }
}
fahrBtn.addEventListener('click', fahrenheitConwerter);
