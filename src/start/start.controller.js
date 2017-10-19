import { fetchDecks } from "../deck/deck.service";

export default class StartController {
  constructor($state) {
    this.state = $state;
    this.decks = fetchDecks();
    this.selectedDeck = null;
  }

  selectDeck(deck) {
    this.selectedDeck = this.selectedDeck === deck ? null : deck;
  }

  goToBoard() {
    if (this.selectedDeck === null) {
      alert("Pick a deck first!");
      return;
    }

    this.state.go("board");
  }

  goToCreateDeck() {
    this.state.go("deck-create");
  }
}
