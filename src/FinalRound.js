import Round from '../src/Round'

class FinalRound extends Round {
  constructor(categories, cardSet) {
    super(categories, cardSet)
    this.categories = categories;
    this.cardSet = cardSet;
  }
   

}
export default FinalRound;