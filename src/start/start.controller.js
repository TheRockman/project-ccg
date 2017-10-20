import { fetchDecks } from "../deck/deck.service";
import { generateId } from "../utils/utils.service";

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

    this.hardCodedPlayer = {
      name: "Herman",
      id: this.selectedDeck.userId,
      deck: this.selectedDeck
    };

    localStorage.setItem("player", JSON.stringify(this.hardCodedPlayer));
    this.state.go("board");
  }

  goToCreateDeck() {
    this.state.go("deck-create");
  }
}
