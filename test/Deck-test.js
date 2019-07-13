import chai from 'chai';
const expect = chai.expect;
import Round from '..src/round'

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });


});
