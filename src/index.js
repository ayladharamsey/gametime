import "./css/base.scss";
import $ from "jquery";
import Game from "../src/Game.js";
import Player from "../src/Player.js";
import brick from "../src/brick.png"
import Round from "./Round";


let data;
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
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

$(".start-game-button").on("click", function(e) {
  e.preventDefault();
  var player1 = new Player($("#player-one-name-input").val());
  var player2 = new Player($("#player-two-name-input").val());
  var player3 = new Player($("#player-three-name-input").val());
  var game = new Game(data, [player1, player2, player3]);
  $(".splash-page").hide();
  $(".main-page").show();
  game.startRound();
  makeBoard(game.currentRound);
  getCards(game.currentRound, game);
  guessManager(game, player1, player2, player3);
  updatePlayerName(player1, player2, player3);
});


function evaluateGuess(game) {
  if (game.currentPlayer === 2 && game.currentCard.answer.toLowerCase() !== game.playerSet[game.currentPlayer].guess) {
    game.playerSet[game.currentPlayer].playerScore -= game.currentCard.pointValue;
    game.currentPlayer = 0
    game.currentRound.remainingCardCount--;
  } else if (game.currentCard.answer.toLowerCase() === game.playerSet[game.currentPlayer].guess) {
    game.playerSet[game.currentPlayer].playerScore += game.currentCard.pointValue;
    game.currentRound.remainingCardCount--;
  } else {
    (game.currentCard.answer.toLowerCase() !== game.playerSet[game.currentPlayer].guess) 
    game.playerSet[game.currentPlayer].playerScore -= game.currentCard.pointValue;
    game.currentPlayer++;
    game.currentRound.remainingCardCount-- ;
  }
  game.endRound1And2(game.currentRound.remainingCardCount)
}


function assignGuess(game) {
  game.playerSet[game.currentPlayer].guess = $(
    `#player-1-answer-input`).val();
}

function guessManager(game, player1, player2, player3) {
  $(`#player-1-answer-button`).on("click", function(e) {
    e.preventDefault();
    assignGuess(game);
    evaluateGuess(game);
    updatePlayerScore(player1, player2, player3);
    $(`#${game.block}`).html(`<img style="height:200px;" id="brick" src=${brick} />`)
    $(`#${game.block}`).off()
    $(".question-and-answer").hide()
    $("table").show()
  });
}

function getCards(round, game) {
  game.endRound1And2()
  $(".card").on("click", function(e) {
    var question = $(e.target).closest("th").text();
    game.block = event.target.id
    round.cardSet.forEach(array1 =>
      array1.find(el => {
        if (el.question === question) {
          game.currentCard = el;
          $(".question").text(game.currentCard.question)
          $(".player-input-labels").text(game.playerSet[game.currentPlayer].playerName + " Its Your Turn!")
          $('.card').on('click', () => {
            game.currentCard.answer.toLowerCase()
          })
        }
      })
    );
  });
}

function makeBoard(currentRound) {
  currentRound.categories.forEach((cat, index) => {
    $(`#category-name-${index + 1}`).html(cat[0]);
  });
  currentRound.cardSet.forEach(el =>
    el.forEach((card, index) => {
      $(".card").on("click", function(e) {
        $(".question-and-answer").show()
        $(e.target).closest($(`#category-${index + 1}-${card.pointValue.toString()}`)).text(card.question);
        $("table").hide()
      });
    })
  );
}

function updatePlayerName(player1, player2, player3) {
  $("#player-1-name").text(player1.playerName);
  $("#player-2-name").text(player2.playerName);
  $("#player-3-name").text(player3.playerName);
}

function updatePlayerScore(player1, player2, player3) {
  $("#player-1-score").text(`Score: ${player1.playerScore}`);
  $("#player-2-score").text(`Score: ${player2.playerScore}`);
  $("#player-3-score").text(`Score: ${player3.playerScore}`);
}

// increasePointValue() {} (only called on Round 2)

//dom-bois
$(".restart-game-button").on("click", () => {
  location.reload();
});

$('.card').on('click', () => {
  $('#player-1-answer-input').val('')
})

// determineCardValueForRounds() {}
