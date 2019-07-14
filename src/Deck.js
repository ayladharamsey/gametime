class Deck {
  constructor (data) {
    this.categories = data.categories
    this.cards = data.clues
    this.roundCategories
  }


  assignCategories() {
    const randomCatergories = Object.keys(this.categories).sort( (a, b) => 0.5 - Math.random())
    if (round.roundCounter === 1) {
      this.roundCategories = randomCatergories.slice(0,5)
    }
    else if (round.roundCounter === 2) {
      this.roundCategories = randomCatergories.slice(4,9)
    }
    else this.roundCategories = randomCatergories.slice(10)
  }

}

export default Deck;
