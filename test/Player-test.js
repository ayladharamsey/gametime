import chai from 'chai'
import Player from '../src/Player.js'
const expect = chai.expect;

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player('Jev');
  });

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it("should be an instance of a Player", () => {
    expect(player).to.be.a.instanceOf(Player);
  });

  it("should begin with a playerScore of 0", () => {
    expect(player.playerScore).to.equal(0);
  });

  it("should take in a playerName", () => {
    expect(player.playerName).to.equal("Jev");
  });

  // it("should have a minimium value of 5 to wage", () => {
  //   player.manageWagers();
  //   expect(player.canWager).to.equal(true);
  // });

  // it.skip("should have a maximum value of the highest point value on the board or the current player's total score", () => {
  //   expect(player.playerWager).to.be.at.below(player.playerScore || round.cards.pointValue);
  // });

}); 