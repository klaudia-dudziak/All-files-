// document.querySelector('#newGame_layer button')
//   .addEventListener('click', function(){
//     console.log('Utworzenie nowej gry')
//     document.querySelector('#game').style.display = 'block'
//     document.querySelector('#newGame_layer').style.display = 'none'
//     document.querySelector('#new-game').style.display= 'none'
//   });
// document.querySelector('#new-game')
//   .addEventListener('click', function(){
//     var gameLayer = document.querySelector('#game')
//     gameLayer.style.display = 'none'
//     var nameSelectLayer = document.querySelector('#newGame_layer')
//     nameSelectLayer.style.display = 'block'
//   })

document.querySelector('#newGame_layer button')
  .addEventListener('click', function(){
    console.log('Utworzenie nowej gry')
    document.querySelector('#newGame_layer').style.display = 'none'
});