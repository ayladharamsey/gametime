import chai from 'chai'
import Player from '../src/Player.js'
import Dataset from '../src/Dataset.js'
const expect = chai.expect;

describe('player', () => {
  let player;
  let dataset;

  beforeEach(() => {
    player = new Player();
  });

  it.only('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it.only("should be an instance of a Player", () => {
    expect(player).to.be.a.instanceOf(Player);
  });

  it.skip("should have a minimium value of 5 to wage", () => {
    expect(player.playerWager).to.be.at.least(5);
  });

  it.skip("should have a maximum value of the highest point value on the board or the current player's total score", () => {
    expect(player.playerWager).to.be.at.below(player.playerScore || pointValue);
  });

}); 