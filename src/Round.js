// import Deck from "./Deck";

class Round {
  constructor(deck) {
    this.deck = deck;
    this.roundCount = 0;
    this.dailyDoubleOne;
    this.dailyDoubleTwo;
    this.currentCardSet = deck.cardSet;
    this.remainingCardCount = 16;
  }

  startRound() {
    this.roundCount++
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