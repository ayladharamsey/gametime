import chai from 'chai'
import Round from '../src/Round.js'
import data from '../src/dataset.js'
import Deck from '../src/Deck.js'
const expect = chai.expect;


describe('Round', () => {
  let round; 
  let deck;

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
    deck.assignCategories();
    deck.assignCards();
    expect(round.deck.cardset).to.equal();
  });

  it.skip('should return the card answer', () => {
    expect(round.answer).to.equal("golf");
  }); 

  it.skip('should return the card category number', () => {
    expect(round.category).to.equal(10);
  }); 

  it.skip('should return a random number between 1 and 16', () => {
    expect(round.generateRandomDailyDoubleCard()).to.equal();
  });

  it.skip('should return a second random number if second round', () => {
    expect(round.generateRandomDailyDoubleCard2()).to.equal();
  });

  it.skip('should return the point value of the daily double', () => {
    expect(round.determineDailyDoublePointValue()).to.equal(200);
  });

  it.skip('should return the point value of the daily double', () => {
    expect(round.determineCardValueForRounds()).to.equal(100);
  });

  it.skip('should return remove clicked clues from array', () => {
    expect(round.removeClickedCategoriesFromArray()).to.equal([[1, 1, 1, 1], [2, 2, 2], [3, 3], [4]]);
  });

  it.skip('should end game once array length is 0', () => {
    expect(round.endGame()).to.equal();
  });
});