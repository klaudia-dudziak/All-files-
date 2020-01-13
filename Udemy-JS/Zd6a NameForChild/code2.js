const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", 
"Marysia", "Anastazja", "Kasia"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", 
"Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę",
 "Jestem pewien"];

 const name = () => {
     const a = Math.floor(Math.random()*prefixs.length);
     const i = Math.floor(Math.random()*names.length);
    div.textContent = `${prefixs[a]}, że najlepszym imieniem bedzie ${names[i]}`
 }

 btn.addEventListener('click', name)