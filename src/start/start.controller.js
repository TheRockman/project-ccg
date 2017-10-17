import { fetchDecks } from "../deck/deck.service";

export default class StartController {
  constructor($state) {
    this.state = $state;
    this.decks = fetchDecks();
  }

  goTo() {
    this.state.go("deck-create");
  }
}
