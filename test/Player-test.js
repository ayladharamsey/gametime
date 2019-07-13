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

  it.only()
});