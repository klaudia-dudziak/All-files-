const h1 = document.querySelector('h1');

const move = () => {
    const width = event.clientX / 3;
    const height = event.clientY / 3;
    const widthReady = width.toFixed(1);
    const heightReady = height.toFixed(1);
    document.body.style.backgroundColor = `rgb(${width} ${height} ${width/height})`;
    h1.textContent = `${widthReady},  ${heightReady}`
}
window.addEventListener('mousemove', move)
 


