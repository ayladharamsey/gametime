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
  
  endRound() {
    if (this.remainingCardCount === 0 && this.roundCount !== 3) {
      this.startRound()
    } else {
      game.endGame();
    } 
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