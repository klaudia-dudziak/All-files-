document.body.addEventListener('click', () => {
    const x = event.clientX;
    const y = event.clientY;
    
    if(x%2 === 0 && y%2 === 0) {
        document.body.style.backgroundColor = "red";
    }
    else if(x%2 != 0 && y%2 != 0) {
        document.body.style.backgroundColor = "blue";
    }
    else {document.body.style.backgroundColor = "green";}

    console.log(x, y)
} )
