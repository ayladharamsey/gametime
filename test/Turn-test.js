import chai from 'chai'
import Turn from '../src/Turn.js'
import Dataset from '../src/Dataset.js'
const expect = chai.expect;

describe('turn', () => {
  let turn;
  let dataset;

  beforeEach(() => {
    turn = new Turn();
  });

  it.only('should be a function', () => {
    expect(Turn).to.be.a('function');
  });
});