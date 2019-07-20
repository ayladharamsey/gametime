class Player {
  constructor(playerName, playerWager) {
    this.playerScore = 0;
    this.playerName = playerName;
    this.canWager = false;
    this.playerWager = playerWager;
  }

  manageWagers() {
  }

  returnWagerPoints() {
    //playerWager * 2
  }
}

export default Player;