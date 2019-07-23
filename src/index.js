import './css/base.scss';
import $ from 'jquery';
import Game from '../src/Game.js';
import Player from '../src/Player.js';
import brick from '../src/brick.png'
import Round from './Round';
var tableClone = $('table').clone();

let data;
fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data')
  .then(response => response.json())
  .then(fetchData => (data = fetchData.data));

$(document).ready(function() {
  $(':input[type="submit"]').prop('disabled', true);
  $('input[type="text"]').keyup(function() {
    if ($('#player-one-name-input').val() !== '' && $('#player-two-name-input').val() !== ''
        && $('#player-three-name-input').val() !== '') {
      $(':input[type="submit"]').prop('disabled', false);
    }
  });
});

$('.start-game-button').on('click', function(e) {
  e.preventDefault();
  var player1 = new Player($('#player-one-name-input').val());
  var player2 = new Player($('#player-two-name-input').val());
  var player3 = new Player($('#player-three-name-input').val());
  var game = new Game(data, [player1, player2, player3]);
  game.startRound();
  startRoundManager(game.currentRound, game)
  guessManager(game, player1, player2, player3, game.currentRound);
  updatePlayerName(player1, player2, player3);
  assignDailyDouble(game.currentRound, game);
});


function evaluateGuess(game) {
  if (game.currentRoundNum === 1) {
    if (game.currentPlayer === 2 && game.currentCard.answer.toLowerCase() !== game.playerSet[game.currentPlayer].guess) {
      game.playerSet[game.currentPlayer].playerScore -= game.currentCard.pointValue;
      game.currentPlayer = 0
    } else if (game.currentCard.answer.toLowerCase() === game.playerSet[game.currentPlayer].guess) {
      game.playerSet[game.currentPlayer].playerScore += game.currentCard.pointValue;
    } else {
      (game.currentCard.answer.toLowerCase() !== game.playerSet[game.currentPlayer].guess)
      game.playerSet[game.currentPlayer].playerScore -= game.currentCard.pointValue;
      game.currentPlayer++;
    }
  } else if (game.currentRoundNum === 2) {
    game.currentCard.pointValue = (game.currentCard.pointValue * 2)
    if (game.currentPlayer === 2 && game.currentCard.answer.toLowerCase() !== game.playerSet[game.currentPlayer].guess) {
      game.playerSet[game.currentPlayer].playerScore -= game.currentCard.pointValue;
      game.currentPlayer = 0
    } else if (game.currentCard.answer.toLowerCase() === game.playerSet[game.currentPlayer].guess) {
      game.playerSet[game.currentPlayer].playerScore += game.currentCard.pointValue;
    } else {
      (game.currentCard.answer.toLowerCase() !== game.playerSet[game.currentPlayer].guess)
      game.playerSet[game.currentPlayer].playerScore -= game.currentCard.pointValue;
      game.currentPlayer++;
    }
  }
}


function assignGuess(game) {
  game.playerSet[game.currentPlayer].guess = $(
    '#player-answer-input').val();
}

function guessManager(game, player1, player2, player3, round) {
  $('#player-answer-button').on('click', function(e) {
    e.preventDefault();
    round.remainingCardCount --
    assignGuess(game);
    evaluateGuess(game, round);
    updatePlayerScore(player1, player2, player3);
    guessDomWork(game)
    endRound(round, game)
    // $('table').show()
    // $('.dd').hide()
  });
}

function startRoundManager(round, game) {
  makeBoard(round);
  getCards(round, game);
}

function guessDomWork(game) {
  $(`#${game.block}`).html(`<img style='height:60px; width:100px;' id='brick' src=${brick} />`)
  $(`#${game.block}`).off()
}

function getCards(round, game) {
  $('.card').on('click', function(e) {
    var question = $(e.target).closest('th').text();
    game.block = event.target.id
    round.cardSet.forEach(array1 =>
      array1.find(el => {
        if (el.question === question) {
          game.currentCard = el;
          $('.question').text(game.currentCard.question)
          $('.player-input-labels').text(game.playerSet[game.currentPlayer].playerName + ', it\'s your turn!')
          game.currentCard.answer.toLowerCase()
        }
      })
    );
  });
}

function makeBoard(currentRound) {
  currentRound.categories.forEach((cat, index) => {
    $(`#category-name-${index + 1}`).html(cat[0]
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str) {return str.toUpperCase()}));
  });
  currentRound.cardSet.forEach(el =>
    el.forEach((card, index) => {
      $('.card').on('click', function(e) {
        $(e.target).closest($(`#category-${index + 1}-${card.pointValue.toString()}`)).text(card.question);
        dom()
      });
    })
  );
}

function updatePlayerName(player1, player2, player3) {
  $('#player-1-name').text(player1.playerName);
  $('#player-2-name').text(player2.playerName);
  $('#player-3-name').text(player3.playerName);
}

function updatePlayerScore(player1, player2, player3) {
  $('#player-1-score').text(`Score: ${player1.playerScore}`);
  $('#player-2-score').text(`Score: ${player2.playerScore}`);
  $('#player-3-score').text(`Score: ${player3.playerScore}`);
}

 function displayRoundWinner(round) {
   if (round.remainingCardCount === 0) {
    $('.round-winner').show()
    $('.round-winner').text(`Congratuations ${round.roundWinner[0].playerName} you won the round!`)
   }
 }

//dom-bois
$('.restart-game-button').on('click', () => {
  location.reload();
});

$('.start-game-button').on('click', () => {
  $('.splash-page').hide();
  $('.main-page').show();
});

function dom() {
  $('#player-answer-input').val('')
  $('.main-h1').hide();
  $('.player-bar').hide();
  $('table').hide()
  $('.question-and-answer').show()
}

$('#player-answer-button').on('click', () => {
  $('.question-and-answer').hide()
  $('.dd').hide()
  $('table').show()
  $('.main-h1').show()
  $('.player-bar').show();
})

function endRound(round, game) {
  if (round.remainingCardCount === 12 && game.currentRoundNum === 1) {
    round.determineRoundWinner(game.playerSet)
    $('table').replaceWith(tableClone)
    $('.card').each(function() {
      $(this).text($(this).text() * 2)
    });
    game.startRound()
    round.remainingCardCount = 16
    startRoundManager(game.currentRound, game)
    round.assignDailyDouble2()
    assignDailyDouble(round, game)
    displayRoundWinner(round)
  } else if (round.remainingCardCount === 12 && game.currentRoundNum === 2) {
    $('table').hide()
    game.startRound();
    $('#final-category').text('The Final Category is...' + game.currentRound.categories[0][0])
    console.log(game.currentRound)
  }
}




function assignDailyDouble(round, game) {
  $('.card').on('click', () => {
  if (round.dailyDouble1 === round.remainingCardCount || round.dailyDouble2 === round.remainingCardCount) {
    $('.player-input-labels-dd').text(game.playerSet[game.currentPlayer].playerName + 'Please Enter a Wager!')
    $('.dd').show()
    takeWager(game)
    }
  })
}

function takeWager(game) {
    $('#player-1-wager-button').on('click', () => {
    if (game.currentRoundNum === 1) {
       game.currentCard.pointValue = $('#player-1-hidden-input').val()
     }
      else if (game.currentRoundNum === 2) {
         game.currentCard.pointValue = $('#player-1-hidden-input').val() / 2
      }
    })
}
