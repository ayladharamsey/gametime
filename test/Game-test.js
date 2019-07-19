import chai from 'chai';
const expect = chai.expect;
import data from '../src/dataset.js'
import Game from '../src/Game';
// import Player from '../src/Player.js';
// import Round from '../src/Round.js';
describe('Game', function() {

  let game;
  beforeEach(() => {
    game = new Game(data);
  });


  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should hold data', () => {
    expect(Object.keys(game.categories).length).to.eql(10);
  });

  it('should have a cards property and hold cards', () => {
    expect(game.cards.length).to.eql(114)
  });

  it('should have a randomCategories property that randomizes the order of categories', () => {
    expect(Object.keys(game.randomCategories)).to.not.eql(
      ["unitedStatesHistory", "lifeScience", "publicHealth", "educationJargon", 
        "nameThatBoardGame", "americanLiterature", "biographies", "americanCities", "food", "cableTV"])
  });

  it('should initially have roundCategories undefined, but have a length of 4 when startRound method is invoked', () => {
    expect(game.roundCategories).to.equal(undefined)
    game.startRound()
    expect(game.roundCategories.length).to.eql(4)
  });

  it('should have cardSet intially undefined, but given a length of 4 (with 4 items in each) when startRound method is invoked', () => {
    expect(game.cardSet).to.equal(undefined)
    game.startRound()
    expect(game.cardSet.length).to.eql(4)
    expect(game.cardSet[0].length).to.eql(4)
    expect(game.cardSet[1].length).to.eql(4)
    expect(game.cardSet[2].length).to.eql(4)
    expect(game.cardSet[3].length).to.eql(4)
  });

  it('should initially have a playerSet property of undefined', () => {
    expect(game.playerSet).to.equal(undefined)
  })

  it('should initially have a currentRoundNum property of 0 that increments when startRound is invoked', () => {
    expect(game.currentRoundNum).to.equal(0)
    game.startRound()
    expect(game.currentRoundNum).to.equal(1)
  })


});
