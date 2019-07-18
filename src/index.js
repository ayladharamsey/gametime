import './css/base.scss';
import $ from 'jquery';
import Game from '../src/Game.js'
import Player from '../src/Player.js'

let data
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
  .then(response => response.json())
  .then(fetchData => data = fetchData.data)


$('.start-game-button').on('click', function(e) {
  e.preventDefault();
  var player1 = new Player($('#player-one-name-input').val())
  var player2 = new Player($('#player-two-name-input').val())
  var player3 = new Player($('#player-three-name-input').val())
  var game = new Game(data, player1, player2, player3)
  $('.splash-page').hide();
  $('.main-page').show()
  game.startRound()
  makeBoard(game.currentRound)
  getAnswers(game.currentRound)
  append(player1, player2, player3)
});

function getAnswers(round) {
  $("table").on( "click", function(e) {
    // $( e.target ).closest(".card").show()
    var question = $( e.target ).closest( "th" ).text()
    round.cardSet.forEach(array1 => array1.find(el => {
      if (el.question === question) {
        round.currentCorrectAnswer = el.answer
        console.log(round)
      }
    }));
  });
}


function makeBoard(currentRound) {
  currentRound.categories.forEach( (cat, index) => {
    $(`#category-name-${index + 1}`).html(cat[0])
  })
  currentRound.cardSet.forEach(el => el.forEach( (card, index) => {
    $(".card").on( "click", function(e) {
    $(e.target).closest($(`#category-${index + 1}-${card.pointValue.toString()}`)).text(card.question)
  })
  }))
}

function append(player1, player2, player3) {
  $("#player-1-name").text(player1.playerName)
  $("#player-2-name").text(player2.playerName)
  $("#player-3-name").text(player3.playerName)
  updatePlayerScore(player1, player2, player3)
}

function updatePlayerScore(player1, player2, player3) {
  $('#player-1-score').append(player1.playerScore)
  $('#player-2-score').append(player2.playerScore)
  $('#player-3-score').append(player3.playerScore)
}

$('.restart-game-button').on('click', () => {
  location.reload();
})
