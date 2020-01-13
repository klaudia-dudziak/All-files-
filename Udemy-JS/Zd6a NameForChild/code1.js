const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", 
"Marysia", "Anastazja", "Kasia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", 
"Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę",
 "Jestem pewien"];

 const showName = () => {
     const name = Math.floor(Math.random() * names.length);
     const prefix = Math.floor(Math.random() * prefixs.length);
   
    div.textContent = `${prefixs[prefix]}, że najlepsze imię to ${names[name]}.`
    
 }
 btn.addEventListener('click', showName)