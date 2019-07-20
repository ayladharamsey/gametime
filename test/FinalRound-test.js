import chai from 'chai';
const expect = chai.expect;
import data from '../src/dataset.js'
import Game from '../src/Game';
// import Round from '../src/Round';
import FinalRound from '../src/FinalRound';

describe('FinalRound', function() {

  let game;
  let round;
  let round2;
  let final;

  beforeEach(() => {
    game = new Game(data);
    game.currentRoundNum = 2
    game.startRound()
    // round = game.currentRound
    // game.startRound()
    // round2 = game.currentRound
    // game.startRound()
    final = game.currentRound
  });
  
  
  it('should be a function', () => {
      console.log(final)
    expect(FinalRound).to.be.a('function');
  });
  
//   it('should be an instance of FinalRound', () => {
//     expect(final).to.be.an.instanceof(FinalRound);
//   });
  
//   it('should hold the categories of cardSet', () => {
//     //   console.log("final: ", final)
//     expect(final.cardSet).to.equal();
//   });
  
//   it('should', () => {
//     expect().to.equal()
//   });
  
//   it('should', () => {
//     expect().to.equal()
//   });
  
//   it('should', () => {
//     expect().to.equal()
//   });
  
//   it('should', () => {
//     expect().to.equal()
//   });
  
//   it('should', () => {
//     expect().to.equal()
//   })
  
//   it('should', () => {

//     expect().to.equal()
//   })
  
  
});
  