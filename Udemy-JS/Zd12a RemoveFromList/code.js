const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`[data-key="${index}"]`).remove();
}    
    document.querySelectorAll('button').forEach(item => item.addEventListener('click', removeTask))   

    // uswanie li po kliknieciu w przycisk
 
    //e.target.parentNode.remove();
    //przekreslanie li po kliknieciu w przycisk i usuwanie go
    //e.target.parentNode.style.textDecoration = "line-through";
    //e.target.remove();


// }
//document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask));

// usuwanie li po kliknieciu w tekst
// const removeTask = (e) => {
//     e.target.remove();

// }
// document.querySelectorAll('li').forEach(item => item.addEventListener('click', removeTask));
