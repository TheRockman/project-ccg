import cardFactory from "../game/card";
import fetchCards from "../deck/deck.service";

export default class StartController {
  constructor($state) {
    this.state = $state;

    const cards = fetchCards().map(card => cardFactory(card));
    console.log(cards);
  }

  goTo() {
    this.state.go("deck-create");
  }
}
