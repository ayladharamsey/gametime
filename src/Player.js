class Player {
  constructor(playerScore = 0, playerName, playerWager) {
    this.playerScore = playerScore;
    this.playerName = playerName;
    this.playerWager = playerWager;
    this.canWager = false;
  }

  manageWagers() {
    if (this.playerScore > 5) {
      this.canWager = true;
    }
  }
}

export default Player;