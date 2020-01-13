class Statistics {
constructor() {
        this.gameResults = []
    }
    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win, //win,
            bid: bid, //bid,
        }
        this.gameResults.push(gameResult)
    }
    showGameStatistics() {
        let game = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        return [game, wins, losses]
    }
}