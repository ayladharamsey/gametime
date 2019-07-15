import chai from 'chai'
import Round from '../src/Round.js'
import data from '../src/dataset.js'
import Deck from '../src/Deck.js'
const expect = chai.expect;


describe('Round', () => {
  let round; 
  let deck;

  beforeEach(() => {
    round = new Round("Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this", 100, "golf", 10)
  });

  beforeEach(() => {
    deck = new Deck(data)
    round = new Round(deck)
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should start the round count at 1', () => {
    expect(round.roundCount).to.equal(1);
  });  

  it('should return the card question', () => {
    expect(round.question).to.equal("Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this");
  });

  it('should return the card answer', () => {
    expect(round.answer).to.equal("golf");
  }); 

  it('should return the card category number', () => {
    expect(round.category).to.equal(10);
  }); 

  it('should return a random number between 1 and 16', () => {
    expect(round.generateRandomDailyDoubleCard()).to.equal();
  });

  it('should return a second random number if second round', () => {
    expect(round.generateRandomDailyDoubleCard2()).to.equal();
  });

  it('should return the point value of the daily double', () => {
    expect(round.determineDailyDoublePointValue()).to.equal(200);
  });

  it('should return the point value of the daily double', () => {
    expect(round.determineCardValueForRounds()).to.equal(100);
  });

  it('should return remove clicked clues from array', () => {
    expect(round.removeClickedCategoriesFromArray()).to.equal([[1, 1, 1, 1], [2, 2, 2], [3, 3], [4]]);
  });

  it('should end game once array length is 0', () => {
    
    expect(round.endGame()).to.equal();
  });
});