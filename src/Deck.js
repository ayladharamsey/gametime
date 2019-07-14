class Deck {
  constructor (data) {
    this.categories = data.categories
    this.cards = data.clues
    this.roundCategories
  }


  assignCategories() {
    const randomCatergories = Object.entries(this.categories).sort( (a, b) => 0.5 - Math.random())
    // if (round.roundCounter === 1) {
      this.roundCategories = randomCatergories.slice(0, 4)
  //   }
  //   else if (round.roundCounter === 2) {
  //     this.roundCategories = randomCatergories.slice(4, 9)
  //   }
  //   else this.roundCategories = randomCatergories.slice(10)
}


  // assignCards() {
  //   const randomCardSet = []
  //   return this.cards.filter(el => el.categoryId === this.roundCategories.map(el => el[0][1]))
  //
  //   // const categoryTwoCards
  //   // const categoryThreeCards
  //   // const categoryFourCards
  // }

}

export default Deck;
