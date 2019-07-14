import chai from 'chai'
import Game from '../src/Game.js'
import Dataset from '../src/dataset.js'
const expect = chai.expect;

describe('game', () => {
  let game;
  let dataset;

  beforeEach(() => {
    game = new Game();
  });

  it.only('should be a function', () => {
    expect(Game).to.be.a('function');
  });
});