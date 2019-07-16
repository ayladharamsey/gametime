class Player {
  constructor(playerScore = 0, playerName, playerWager, turn, round) {
    this.playerScore = playerScore;
    this.playerName = playerName;
    this.playerWager = playerWager;
    this.canWager = false;
    this.turn = turn;
    this.round = round;
  }

  

  manageWagers() {
    if (this.playerScore > 5) {
      this.canWager = true;
  }
}

export default Player;