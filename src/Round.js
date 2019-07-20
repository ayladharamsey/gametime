class Round {
  constructor(categories, cardSet) {
    this.dailyDouble1 = Math.floor(Math.random() * 15) + 1;
    // this.dailyDouble2 = Math.floor(Math.random() * 15) + 1;
    this.categories = categories;
    this.cardSet = cardSet;
    this.remainingCardCount = 16;
 
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
 }
 
 export default Round;
