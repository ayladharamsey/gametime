import Round from '../src/Round'

class FinalRound extends Round {
  constructor(roundCounter, categories, cardSet) {
    super(roundCounter, categories, cardSet)
    this.categories = categories;
    this.cardSet = cardSet;
  }
   

}
export default FinalRound;