class Player {
  constructor(playerName, playerWager, currentGuess) {
    this.playerScore = 0;
    this.playerName = playerName;
    this.playerWager = playerWager;
    this.currentGuess = currentGuess;
  }
  manageWagers() {
    if (this.playerScore > 5) {
      this.canWager = true;
    }
  }
}

export default Player;
