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

}); 