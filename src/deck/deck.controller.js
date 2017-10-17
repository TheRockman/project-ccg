import cardFactory from "../game/card";
import fetchCards from "./deck.service";

import { findAndRemove } from "../utils/utils.service";

export default class DeckController {
  constructor($state) {
    this.state = $state;
    this.deck = [];
    this.cards = fetchCards().map(card => cardFactory(card));
    this.numberOfCardsInDeck = 0;
  }

  selectCard(card) {
    this.deck.push(card);
    this.numberOfCardsInDeck++;
  }

  removeCard(card) {
    findAndRemove(this.deck, card);
    this.numberOfCardsInDeck--;
  }
}
