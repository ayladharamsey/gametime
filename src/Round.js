import Game from "./Game";


class Round {
  constructor(turn, deck) {
    this.turn = turn;
    this.deck = deck;
    this.roundCount = 0;
    this.dailyDouble1 = Math.floor(Math.random() * 15) + 1;
    this.dailyDouble2 = Math.floor(Math.random() * 15) + 1;
    this.currentCardSet = deck.cardSet;
    this.remainingCardCount = 16;
  }

  startRound1() {
    this.roundCount++
    this.deck.assignCategoriesRound1();

    // if (this.remainingCardCount === 0) {                 //place this within scripts.js
    //   `This round is over ${this.determineRoundWinner()} is in the lead` 
    // }
  }

  startRound2() {
    this.roundCount++
    this.turn.guessCount = 0;
    this.deck.assignCategoriesRound2();
  }

  startRound3() {
    this.roundCount++
    this.turn.guessCount = 0;
    this.deck.assignCategoriesRound3();
  }

  determineRoundWinner() {

  }

  compareDailyDoubleValues() {
    if (this.dailyDouble1 === this.dailyDouble2) {
      this.dailyDouble2 = this.dailyDouble1 + 1;
  }

  determineDailyDoublePointValue() {

  }

  determineCardValueForRounds() {

  }

  removeClickedCategoriesFromArray() {

  }

  manageDailyDoublePerRound() {
    
  }
}

export default Round;