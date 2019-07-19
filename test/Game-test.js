import chai from 'chai';
const expect = chai.expect;
import data from '../src/dataset.js'
import Game from '../src/Game';
import Player from '../src/Player.js';
import Round from '../src/Round.js';
describe('Game', function() {

  let game;
  let round;
  // let player;
  beforeEach(() => {
    game = new Game(data);
    // startRound();
    // player = new Player();
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

  it('should randomize the order of categories', () => {
    expect(Object.keys(game.randomCategories)).to.not.eql(
      ["unitedStatesHistory", "lifeScience", "publicHealth", "educationJargon", 
        "nameThatBoardGame", "americanLiterature", "biographies", "americanCities", "food", "cableTV"])
  });

  it('should get 4 categories', () => {
    game.assignCategoriesRound1()
    expect(game.roundCategories.length).to.eql(4)
  });

  it('should get 4 sets of cards relating to categories', () => {
    game.assignCategoriesRound1()
    expect(game.cardSet.length).to.eql(4)
    expect(game.cardSet[0].length).to.eql(4)
  });



});
