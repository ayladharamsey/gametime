import chai from 'chai';
const expect = chai.expect;
import Deck from '../src/Deck';

describe('Deck', function() {

  let deck1;
  beforeEach(function() {
    deck1 = new Deck
  });


  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(deck1).to.be.an.instanceof(Deck);
  });

  


});
