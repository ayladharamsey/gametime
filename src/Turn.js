class Turn {
  constructor(currentPlayer, currentGuess, currentCard, round) {
    this.currentPlayer = currentPlayer;
    this.currentGuess = currentGuess;
    this.guessCount = 0;
    this.currentCard = currentCard;
    this.round = round;
  }

  findDailyDouble() {
    if (this.round.dailyDouble1 === this.round.remainingCardCount) {
      return 
    }
  }

  determineCurrentPlayer() {

  }

  determinePlayersEndOfTurn() {

  }

  playerPickCategory() {

  }

  playerPickCardValue(valuePicked) {

  }

  changePlayerScore() {

  }

  evaluatePlayersGuesses(playerGuess, question, correctAnswer) {
    
  }
}

export default Turn;