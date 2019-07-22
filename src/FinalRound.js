import Round from '../src/Round'

class FinalRound extends Round {
  constructor(categories, cardSet) {
    super(categories, cardSet)
    this.finalCard = this.categories[3]
  }
}
export default FinalRound;