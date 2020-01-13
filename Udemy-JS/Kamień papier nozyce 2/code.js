const PAPER = document.getElementById('paper').onclick = playPaper;
const SCISORS = document.getElementById('scissors').onclick = playScissors;
const ROCK = document.getElementById('rock').onclick = playRock;
//const HANDS = [...document.querySelectorAll('button.choice')];

function playRock() {
    play("rock");
  }
  function playPaper() {
    play("paper");
  }
  function playScissors() {
    play("scissors"); 
  }

  function play(humanPlay) {
  
    computerPlay = getComputerPlay();
    
    if(humanPlay == 'rock') {
      if(computerPlay == 'rock') {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
      } else if (computerPlay == 'paper') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
      } else if (computerPlay == 'scissors') {
        document.getElementById('status').innerHTML += "<p>You win! :)</p>";
        humanScore++;
      }
    } else if (humanPlay == 'paper') {
      if(computerPlay == 'rock') {
        document.getElementById('status').innerHTML += "<p>You win! :)</p>";
        humanScore++;
      } else if (computerPlay == 'paper') {
        document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
      } else if (computerPlay == 'scissors') {
        document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
        computerScore++;
      }  
    } else if (humanPlay == 'scissors') {
      if(computerPlay == 'rock') {
        document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
        computerScore++;
      } else if (computerPlay == 'paper') {
        document.getElementById('status').innerHTML += "<p>You win! :)</p>";
        humanScore++;
      } else if (computerPlay == 'scissors') {
        document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
      }  
    }
    
    document.getElementById('humanScore').innerHTML = humanScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    
  }
  
  function getComputerPlay() {
    var plays = ['rock', 'paper', 'scissors'];
    var play = plays[Math.floor(Math.random() * plays.length)];
    return play;
  }

