import chai from 'chai'
import Round from '../src/Round.js'
import Dataset from '../src/Dataset.js'
const expect = chai.expect;

describe('round', () => {
  let round; 
  let dataset;

  beforeEach(() => {
    round = new Round();
  });

  it.only('should be a function', () => {
    expect(Round).to.be.a('function');
  });
});