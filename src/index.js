import $ from 'jquery';
import Deck from '../src/Deck.js'
var data
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
.then(response => response.json())
.then(fetchData => data = fetchData.data)

$(document).ready(() => {
  setTimeout(popBoard, 500)
});

function popBoard() {
  let deck1 = new Deck(data)
  deck1.assignCategoriesRound1()
  deck1.roundCategories.forEach( (cat, index) => {
  $(`#category-name-${index + 1}`).html(cat[0])
  })
  deck1.cardSet.forEach(el => el.forEach( (card, index) => {
  $(`#category-${index + 1}-${card.pointValue.toString()}`).html(card.question)
  }))
}
