const h1 = document.querySelector('h1');

const show = (e) => {
    const width = Math.floor(e.clientX/6);
    const height = Math.floor(e.clientY/3);
    h1.textContent = `${width}, ${height}`
   document.body.style.backgroundColor = `rgb(${width}, ${height}, ${height/0.8})`;
}
window.addEventListener('mousemove', show);