class Round {
  constructor(roundCounter, categories, cardSet) {
    this.roundCounter = roundCounter
    this.dailyDouble1 = Math.floor(Math.random() * 15) + 1;
    this.dailyDouble2;
    this.categories = categories;
    this.cardSet = cardSet;
    this.remainingCardCount = 16;
  }

  generateRandomDailyDoubleCard2() {
    if (this.roundCounter === 2) {
      this.dailyDouble2 = Math.floor(Math.random() * 15) + 1
    }
    if (this.dailyDouble2 === this.dailyDouble1) {
      this.dailyDouble2 = Math.floor(Math.random() * 15) + 2
    }
  }

  // findDailyDouble() {
  //   if (this.dailyDouble1 === this.remainingCardCount) {
  //     this.player.canWager = true;
  //   }
  // }
}

export default Round;
