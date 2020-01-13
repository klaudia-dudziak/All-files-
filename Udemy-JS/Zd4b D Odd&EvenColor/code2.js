

const colors = () => {
    const width = event.clientX;
    const height = event.clientY;

    if(width%2 == 0 && height%2 == 0) {
        document.body.style.backgroundColor = "red"
    } else if(width%2 !== 0 && height%2 !== 0) {
        document.body.style.backgroundColor = "green"
    } else  {
        document.body.style.backgroundColor = "blue"
    } 
}
document.body.addEventListener('click', colors)