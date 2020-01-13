class WelcomePage {

   welcome() {
    document.querySelector('#newGame_layer button')
    .addEventListener('click', function(){
    document.querySelector('#newGame_layer').style.display = 'none';
    const handsBtn = document.querySelector('.images');
    handsBtn.style.display = 'block';
    btn.style.display = 'block';
    const panels = document.querySelector('.panels');
    panels.style.display = 'block';
    });
   }
}