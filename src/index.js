import './css/base.scss';
import $ from 'jquery';
import Game from '../src/Game.js'
var data
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
.then(response => response.json())
.then(fetchData => data = fetchData.data)


$('.start-game-button').on('click', function(e) {
  e.preventDefault();
  $('.splash-page').hide();
  $('.main-page').show()
});

// $(document).ready(() => {
  // setTimeout(function() {

    // $('.card').removeAttr('')
//     var game = new Game(data)
//     game.assignCategoriesRound1()
//     game.roundCategories.forEach( (cat, index) => {
//       $(`#category-name-${index + 1}`).html(cat[0])
//     })
//     game.cardSet.forEach(el => el.forEach( (card, index) => {
//       $(`#category-${index + 1}-${card.pointValue.toString()}`).html(card.question)
//     }))

//     var answer
//     $(document).on( "click", function(e) {
//       var question = $( e.target ).closest( "th" ).text()
//       game.cardSet.forEach(array1 => array1.find(el => {
//         if (el.question === question) {
//           answer = el.answer
//           console.log(answer)
//         }

//       }))


//     });
//   }, 500);

// });

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

