const btn = document.querySelector('button.btnPlay');
const hands = document.querySelectorAll('.images img');
const options = ['Kamień', 'Papier', "Nożyce"];
let score = "";
const playerName = document.querySelector('input')

const opponentsHand = {
    playerHand: '',
    aiHand: '',
}
 
const gameStats = {
    counter: '0',
    winCounter: '0',
    lossCounter: '0',
    drawCounter: '0',
}

WelcomePage.prototype.welcome();
var user = new User();
hands.forEach(hand => hand.addEventListener('click', user.playerChooseHand()));

//Losowanie zagrania komputera
function aiChooseHand() {
    const order = Math.floor(Math.random()*3);
    opponentsHand.aiHand = options[order];
}

//Logika gry
function gameOptions(player, ai) {
   if(player === ai) {
       score = "draw"
   } else if(player === "Kamień" && ai === "Nożyce" || 
            player === "Nożyce" && ai === "Papier" || 
            player === "Papier" && ai === "Kamień") {
        score = "win"
   } else if (player == "") {
       return
   } else {score = "loss"}
}

// Wyświetlanie wyników
function gamePoints(){
    document.querySelector('p.playerChoose span.playerName').textContent = playerName.value;
    document.querySelector('p.playerChoose span.choose').textContent = opponentsHand.playerHand;
    document.querySelector('p.aiChoose span').textContent = opponentsHand.aiHand;
    document.querySelectorAll('.scoreCounter p').forEach(scoreCounter => scoreCounter.classList.remove('active'));
    if(score === "draw") {
        document.querySelector('p.whoWin span').textContent = "REMIS";
        document.querySelector('p.drawCounter span').textContent = ++gameStats.drawCounter;
        document.querySelector('p.whoWin span').style.color = "white";
        document.querySelector('p.drawCounter').classList.add('active');
    } else if (score === "win") {
        document.querySelector('p.whoWin span').textContent = "WYGRAŁEŚ!";
        document.querySelector('p.winsCounter span').textContent = ++gameStats.winCounter;
        document.querySelector('p.whoWin span').style.color = "seaGreen";
        document.querySelector('p.winsCounter').classList.add('active');
    } else if (score === "loss") {
        document.querySelector('p.whoWin span').textContent = "PRZEGRAŁEŚ";
        document.querySelector('p.lossCounter span').textContent = ++gameStats.lossCounter;
        document.querySelector('p.whoWin span').style.color = "DimGray";
        document.querySelector('p.lossCounter').classList.add('active');
    }
    document.querySelector('p.counter span').textContent = ++gameStats.counter;
}

//Uruchomienie gry
function play() {
    aiChooseHand();
    gameOptions(opponentsHand.playerHand, opponentsHand.aiHand);
    gamePoints();
}
btn.addEventListener('click', play)
 