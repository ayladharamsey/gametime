import chai from 'chai'
import Player from '../src/Player.js'
const expect = chai.expect;

describe('player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it("should be an instance of a Player", () => {
    expect(player).to.be.a.instanceOf(Player);
  });

  it.skip("should have a minimium value of 5 to wage", () => {
    expect(player.playerWager).to.be.at.least(5);
  });

  it.skip("should have a maximum value of the highest point value on the board or the current player's total score", () => {
    expect(player.playerWager).to.be.at.below(player.playerScore || round.cards.pointValue);
  });

}); 