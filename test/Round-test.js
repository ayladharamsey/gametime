import chai from 'chai'
import Player from '../src/Player.js'
import Round from '../src/Round.js'
const expect = chai.expect;

describe('Round', () => {
  let round; 
  let player;

  beforeEach(() => {
    player = new Player('bill')
    round = new Round(game);
    // game.assignCategoriesRound1();
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  }); 

  it.skip('should return remove clicked clues from array', () => {
    expect(round.removeClickedCategoriesFromArray()).to.equal([[1, 1, 1, 1], [2, 2, 2], [3, 3], [4]]);
  });

  it.skip('should end game once array length is 0', () => {
    expect(round.endGame()).to.equal();
  });
});