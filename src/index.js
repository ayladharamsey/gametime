import './css/base.scss';
import $ from 'jquery';
import Game from '../src/Game.js'

var data
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
.then(response => response.json())
.then(fetchData => data = fetchData.data)

$(document).ready(() => {
  setTimeout(function() {
    let game = new Game(data)
    game.startRound()
    let round = game.round
    round.categories.forEach( (cat, index) => {
      $(`#category-name-${index + 1}`).html(cat[0])
    })
    round.cardSet.forEach(el => el.forEach( (card, index) => {
      $(`#category-${index + 1}-${card.pointValue.toString()}`).html(card.question)
    }))

    var answer
    $(document).on( "click", function(e) {
      var question = $( e.target ).closest( "th" ).text()
      round.cardSet.forEach(array1 => array1.find(el => {
        if (el.question === question) {
          answer = el.answer
          console.log(answer)
        }

      }))


    });
  }, 500);

});

  //DOM.js event methods
  // playerPickCategory() {
  // }
  // playerPickCardValue(valuePicked) {
  // }
  //combine with evaluate player guess
  // changePlayerScore() {

  // }
  // evaluatePlayersGuesses(playerGuess, correctAnswer) {

  // }
//   determineCurrentPlayer() {
//   }

//   determinePlayersEndOfTurn() {
//   }
// }
