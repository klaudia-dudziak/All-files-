class User {
    playerChooseHand() {
        hands.forEach(hand => hand.style.boxShadow = "");
        this.style.boxShadow = "0 0 20px 1px silver";
        opponentsHand.playerHand = this.dataset.option;
    }
}