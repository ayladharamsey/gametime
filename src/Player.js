class Player {
  constructor(playerName, playerWager) {
    this.playerScore = 0;
    this.playerName = playerName;
    this.playerWager = playerWager;
  }
  manageWagers() {
    if (this.playerScore > 5) {
      this.canWager = true;
    }
  }
}

export default Player;
