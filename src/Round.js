import Game from "./Game";

class Round {
  constructor(roundCounter, categories, cardSet) {
    this.roundCounter = roundCounter;
    this.dailyDouble1 = Math.floor(Math.random() * 14) + 1;
    this.dailyDouble2;
    this.categories = categories;
    this.cardSet = cardSet;
    this.remainingCardCount = 16;
    this.roundWinner;

  }

  determineRoundWinner(players) {
    let winners = [...players]
    this.roundWinner = winners.sort((a, b) => {
      return b.playerScore - a.playerScore
    })
    console.log(this.roundWinner[0])
  }

  // generateRandomDailyDoubleCard2() {
  //   if (this.dailyDouble1 === this.dailyDouble2) {
  //     this.dailyDouble2 = this.dailyDouble1 + 1;
  //   }
  //   return;
  // }

  findDailyDouble() {
    if (this.dailyDouble1 === this.remainingCardCount) {
      this.player.canWager = true;
    }
  }
 }

 export default Round;
