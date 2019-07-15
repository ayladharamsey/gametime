import Game from "./Game";


class Round {
  constructor(turn, deck) {
    this.turn = turn;
    this.deck = deck;
    this.roundCount = 0;
    this.dailyDoubleOne;
    this.dailyDoubleTwo;
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
  

  generateRandomDailyDoubleCard() {
  }

  generateRandomDailyDoubleCard2() {

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