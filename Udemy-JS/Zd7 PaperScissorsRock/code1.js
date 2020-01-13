 const gameStats = {
    games: 0,
    win: 0,
    losses: 0,
    draw: 0,
}

const gameHands = {
    playerHand: "",
    aiHand: "",
}
 
const hands = [...document.querySelectorAll('.select img')];
const startBtn = document.querySelector('button.start');

function playerChoice() {
    gameHands.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = '0 0 0 4px red'
}

function aiChoice() {
   return hands[Math.floor(Math.random() * hands.length)].dataset.option;

}

function options(player, ai) {
    if( player === ai) {
        return 'draw'
    } else if ( player === "papier" && ai === "kamień" || 
    player === "kamień" && ai === "nożyczki" || player === "nożyczki" && ai === "papier") {
        return 'win'
    } else {return 'loss'}
}

function result(player, ai, score) {
document.querySelector('[data-summary="your-choice"]').textContent = player;
document.querySelector('[data-summary="ai-choice"]').textContent = ai;
document.querySelector('[data-summary="who-win"]').textContent = score;

if(score === 'win') {
    document.querySelector('[data-summary="who-win"]').textContent  = 'Ty wygrałeś!';
    document.querySelector('p.wins span').textContent = ++gameStats.win; 
    document.querySelector('[data-summary="who-win"]').style.color = "green";

} else if(score === 'loss') {
    document.querySelector('[data-summary="who-win"]').textContent  = 'Wygrał przciwnik!';
    document.querySelector('p.losses span').textContent = ++gameStats.losses;
    document.querySelector('[data-summary="who-win"]').style.color = "red";

} else if(score === 'draw') {
    document.querySelector('[data-summary="who-win"]').textContent  = 'Remis!';
    document.querySelector('p.draws span').textContent = ++gameStats.draw;
    document.querySelector('[data-summary="who-win"]').style.color = "gray";

}
document.querySelector('p.numbers span').textContent = ++gameStats.games;
}

function startGame() {
    gameHands.aiHand = aiChoice();
    const gameOptions = options(gameHands.playerHand, gameHands.aiHand);
    result(gameHands.playerHand, gameHands.aiHand, gameOptions);
    endGame();
}

function endGame() {
    hands.forEach(hand => hand.style.boxShadow = "");
    playerHand = "";
    aiHand = "";

}

hands.forEach(hand => hand.addEventListener('click', playerChoice));

startBtn.addEventListener('click', startGame);
