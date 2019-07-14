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


  assignCards() {
    let pointValues = [100, 200, 300, 400]
    let randomCardSet = []
    let finalCardSet = []
    let ids = this.roundCategories.map(el => el[1])
    ids.forEach((id, index) => {
      randomCardSet.push(this.cards.filter(el => el.categoryId === ids[index]))
    })
      pointValues.forEach((value, index1) => {
      finalCardSet.push(randomCardSet.map(nestedArray => nestedArray.find(ely => ely.pointValue === pointValues[index1])))
    })
      return finalCardSet

  }


}

export default Deck;
