import cardFactory from "../game/card";
import fetchCards from "./deck.service";

import { findAndRemove, countInArray } from "../utils/utils.service";
import {
  DECK_SIZE_LIMIT,
  NUMBER_OF_SAME_CARD_IN_DECK
} from "../game/constants";

export default class DeckController {
  constructor($state) {
    this.state = $state;
    this.deck = [];
    this.cards = fetchCards().map(card => cardFactory(card));
    this.numberOfCardsInDeck = 0;
  }

  selectCard(card) {
    if (
      this.numberOfCardsInDeck < DECK_SIZE_LIMIT &&
      countInArray(this.deck, card) < NUMBER_OF_SAME_CARD_IN_DECK
    ) {
      this.deck.push(card);
      this.numberOfCardsInDeck++;
    } else {
      alert("You have a maximum of cards in your deck!");
    }
  }

  removeCard(card) {
    findAndRemove(this.deck, card);
    this.numberOfCardsInDeck--;
  }
}
