import cardFactory from "../game/card";
import fetchCards from "./deck.service";

export default class DeckController {
  constructor($state) {
    this.state = $state;
    this.cards = fetchCards().map(card => cardFactory(card));
  }
}
