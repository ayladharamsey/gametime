import chai from 'chai'
import data from '../src/dataset.js'
import Player from '../src/Player.js'
import Round from '../src/Round.js'
import Game from '../src/Game.js';
const expect = chai.expect;

describe('Round', () => {
  let round; 
  let player;
  let game;

  beforeEach(() => {
    game = new Game(data)
    game.startRound()
    // player = new Player('bill')
    round = new Round(game)
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  }); 

  it('should be instantiated with a game object argument', () => {
    expect(round.game).to.not.equal(undefined);
  }); 
  

  it('should generate a random dailyDouble1 value', () => {
    expect(round.dailyDouble1).to.not.equal(undefined);
  }); 

  it('should have dailyDouble2 as initially undefined', () => {
    expect(round.dailyDouble2).to.equal(undefined);
  }); 

  it('should receive the categories selected for the round per Game', () => {
    expect(round.categories.length).to.eql(4);
  }); 

  it('should generate a second dailyDouble if the currentRoundNum is 2', () => {
    game.startRound()
    round = new Round(game)
    expect(round.generateRandomDailyDoubleCard2()).to.not.equal(undefined);
  }); 



  it('should have receive a cardSet from Game with a length of 4 (with 4 items in each)', () => {
    expect(round.cardSet.length).to.eql(4)
    expect(round.cardSet[0].length).to.eql(4)
    expect(round.cardSet[1].length).to.eql(4)
    expect(round.cardSet[2].length).to.eql(4)
    expect(round.cardSet[3].length).to.eql(4)
  });

  // it.skip('should end game once array length is 0', () => {
  //   expect(round.endGame()).to.equal();
  // });
});