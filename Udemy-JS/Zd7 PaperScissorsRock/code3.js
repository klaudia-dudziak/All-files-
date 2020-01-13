const HANDS = document.querySelectorAll('.select img');
const startBtn = document.querySelector('button.start');
const options = ['papier', 'kamień', 'nożyczki'];
let score = "";

const opponentsHands = {
    playerHand: "",
    aiHand: "",
}
const gameStats = {
    games: 0,
    win: 0,
    losses: 0,
    draw: 0,
}

//Wybranie zagrania przez gracza
 function playerChooseHand() {
    HANDS.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = "0 0 0 4px red";
    opponentsHands.playerHand = this.dataset.option;
 }
 HANDS.forEach(hand =>hand.addEventListener('click', playerChooseHand));

//Losowanie zagrania komputera
 function aiChooseHand() {
    const order = Math.floor(Math.random()*options.length);
    opponentsHands.aiHand = options[order];
 }

//Logika gry
 function option() {
    aiChooseHand();
    if(opponentsHands.playerHand === 'papier' && opponentsHands.aiHand === 'kamień' ||
    opponentsHands.playerHand === 'kamień' && opponentsHands.aiHand === 'nożyczki' ||
    opponentsHands.playerHand === 'nożyczki' && opponentsHands.aiHand === 'papier') { 
        score = "win";
    } else if (opponentsHands.playerHand === opponentsHands.aiHand) {
        score = "draw";
    } else {score = "loss"; } console.log(opponentsHands.aiHand, opponentsHands.playerHand, score)
 }
 
// Wyświetlanie wyników
 function result() {
    document.querySelector('p.winBaner span').textContent = opponentsHands.playerHand;
    document.querySelector('[data-summary="ai-choice"]').textContent = opponentsHands.aiHand;
    document.querySelector('[data-summary="who-win"]').textContent = score;
    
    if(score === 'win') {
        document.querySelector('[data-summary="who-win"]').textContent  = 'Wygrałeś!';
        document.querySelector('p.wins span').textContent = ++gameStats.win; 
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    
    } else if(score === 'loss') {
        document.querySelector('[data-summary="who-win"]').textContent  = 'Przegrałeś';
        document.querySelector('p.losses span').textContent = ++gameStats.losses;
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    
    } else if(score === 'draw') {
        document.querySelector('[data-summary="who-win"]').textContent  = 'Remis!';
        document.querySelector('p.draws span').textContent = ++gameStats.draw;
        document.querySelector('[data-summary="who-win"]').style.color = "gray";
    }
    document.querySelector('p.numbers span').textContent = ++gameStats.games;
 }

//Uruchomienie gry
function game() {
    option();
    result();
}
 startBtn.addEventListener('click', game);