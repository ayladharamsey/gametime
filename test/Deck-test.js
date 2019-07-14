import chai from 'chai';
const expect = chai.expect;
import data from '../src/dataset.js'
import Deck from '../src/Deck';
describe('Deck', function() {

  let deck1;
  beforeEach(() => {
    deck1 = new Deck(data)
  });


  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it('should hold data', () => {
    expect(deck1.categories).to.eql({
        'unitedStatesHistory': 1,
        'lifeSciences': 2,
        'publicHealth': 3,
        'educationJargon': 4,
        'nameThatBoardGame': 5,
        'americanLiterature': 6,
        'biographies': 7,
        'americanCities': 8,
        'food': 9,
        'cableTV': 10
      })
  });

  it('should have a cards property and hold cards', () => {
      expect(deck1.cards.length).to.eql(114)
  });

  it('should get 4 categories', () => {
      deck1.assignCategories()
      expect(deck1.roundCategories.length).to.eql(4)
  });

  it('should get 4 sets of cards relating to categories', () => {
      deck1.assignCategories()
      console.log(deck1.roundCategories)
      console.log(deck1.assignCards())
      expect(4).to.eql(4)
  });



});
