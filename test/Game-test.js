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
    expect(game.categories).to.eql({
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
      expect(game.cards.length).to.eql(114)
  });

  it('should get 4 categories', () => {
      game.assignCategoriesRound1()
      expect(game.roundCategories.length).to.eql(4)
  });

  it('should get 4 sets of cards relating to categories', () => {
      game.assignCategoriesRound1()
      expect(game.cardSet.length).to.eql(4)
  });



});
