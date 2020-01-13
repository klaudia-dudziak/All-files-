const btn = document.querySelectorAll('button')

const remove = (e) => {
    e.target.parentNode.remove();

}
 btn.forEach(item => item.addEventListener('click', remove))
  