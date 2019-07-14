import chai from 'chai'
import Turn from '../src/Turn.js'
import Player from '../src/Player.js'
import Round from '../src/Round.js'
const expect = chai.expect;

describe('turn', () => {
  let turn;
  let player;
  let round;

  beforeEach(() => {
    turn = new Turn(0);
    player = new Player();
    round = new Round();
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should be able to determine the current player', () => {
    expect(turn.currentPlayer).to.equal(0);
  });

  it('should be able to determine when a player\'s turn has come to an end', () => {
    expect(turn.determinePlayersEndOfTurn()).to.be.equal(true);
    expect(turn.currentPlayer).to.equal(1);
  });

  it('should be able to update the current category', () => {
    expect(round.category).to.equal('unitedStatesHistory');
    turn.playerPickCategory();
    expect(round.category).to.equal('nameThatBoardGame');
  });

  it('should be able to pick a card value', () => {
    turn.playerPickCardValue(10);
    expect(round.cardsPointValue).to.equal(100); // I don't think this is correct. If you look at the dataset, there are multiple cards with the id of 10 that have various point values.
  });

  it('should evaluate whether the player\'s guess is incorrect', () => {
    expect(turn.evaluatePlayersGuesses('potatoes', 'An energetic person is full of these, maybe the fava type', 'beans')).to.equal(false)
  });

  it('should evaluate whether the player\'s guess is correct', () => {
    expect(turn.evaluatePlayersGuesses('beans', 'An energetic person is full of these, maybe the fava type', 'beans')).to.equal(true)
  });

  it('should increment point value if correct', () => {
    expect(turn.evaluatePlayersGuesses('beans', 'An energetic person is full of these, maybe the fava type', 'beans')).to.equal(true)
    expect(player.playerScore).to.equal(400) //actual amount incremented is not correct
  });

  it('should decreemt point value if correct', () => {
    expect(turn.evaluatePlayersGuesses('potatoes', 'An energetic person is full of these, maybe the fava type', 'beans')).to.equal(false)
    expect(player.playerScore).to.equal(100) //actual amount decemented is not correct
  });

});