import $ from 'jquery';
import Deck from '../src/Deck.js'
import data from '../src/dataset.js'

$(document).ready(() => {
  let deck1 = new Deck(data)
  deck1.assignCategoriesRound1()
  deck1.roundCategories.forEach( (cat, index) => {
  $(`#category-name-${index + 1}`).html(cat[0])
})

  deck1.cardSet[0].forEach( (card, index) => {
  $(`#category-${index + 1}-100`).html(card.answer)
});







});
