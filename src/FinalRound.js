import Round from '../src/Round'

class FinalRound extends Round {
  constructor(categories, cardSet) {
    super(categories, cardSet)
    console.log(this.categories)
  }
  stuff() {
    return `Hey, I'm stuff!`
  }

}
export default FinalRound;