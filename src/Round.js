import Game from "./Game";

class Round {
  constructor() {
    this.roundCount = 0;
    this.dailyDouble1 = Math.floor(Math.random() * 15) + 1;
    this.dailyDouble2 = Math.floor(Math.random() * 15) + 1;
    this.currentCardSet = game.cardSet;
    this.remainingCardCount = 16;
  }

  startRound1() {
    this.roundCount++
    this.game.assignCategoriesRound1();

    // if (this.remainingCardCount === 0) {                 //place this within scripts.js
    //   `This round is over ${this.determineRoundWinner()} is in the lead` 
    // }
  }

  startRound2() {
    this.roundCount++
    this.game.assignCategoriesRound2();
  }

  startRound3() {
    this.roundCount++
    this.game.assignCategoriesRound3();
  }

  determineRoundWinner() {

  }

  generateRandomDailyDoubleCard2() {
    if (this.dailyDouble1 === this.dailyDouble2) {
      this.dailyDouble2 = this.dailyDouble1 + 1;
    }
    return; 
  }

  findDailyDouble() {
    if (this.dailyDouble1 === this.remainingCardCount) {
      this.player.canWager = true;
    }
  }

  determineDailyDoublePointValue() {

  }

  determineCardValueForRounds() {

  }

  removeClickedCategoriesFromArray() {

  }
}

export default Round;