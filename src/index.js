import './css/base.scss';
import $ from 'jquery';
import Game from '../src/Game.js'

var data
var game
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
.then(response => response.json())
.then(fetchData => data = fetchData.data)
.then(data => game = new Game(data))

setTimeout(() => {
game.startRound()
makeBoard(game.round)
getAnswers(game.round)
}
,500)

var answer
function getAnswers(round) {
  $(document).on( "click", function(e) {
    var question = $( e.target ).closest( "th" ).text()
    round.cardSet.forEach(array1 => array1.find(el => {
      if (el.question === question) {
        answer = el.answer
        console.log(answer)
      }
    }));
  });
}

function makeBoard(currentRound) {
  currentRound.categories.forEach( (cat, index) => {
    $(`#category-name-${index + 1}`).html(cat[0])
  })
  currentRound.cardSet.forEach(el => el.forEach( (card, index) => {
    $(`#category-${index + 1}-${card.pointValue.toString()}`).html(card.question)
  }))
}
