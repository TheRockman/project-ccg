import eventHandler from "./eventHandler";
import { getRandomNumberBetween } from "../utils/utils.service";
import { GAME_START } from "./events";

export default class Game {
  constructor(eventDispatcher, player) {
    this.player = player;
    this.cards = this.player.deck.cards;
    this.eventDispatcher = eventDispatcher;
    this.eventDispatcher.on(GAME_START, event => this.handleEvent(event));
  }

  handleEvent(event) {
    switch (event.type) {
      case GAME_START:
        this.main();
        break;
    }
  }

  mulliganPhase() {
    let startingHand = [];
    let card;
    while (startingHand.length < 4) {
      //TODO NEED BETTER ALGORITHM FOR THIS!
      card = this.cards[getRandomNumberBetween(0, this.cards.length)];
      if (card != null) startingHand.push(card);
    }
    console.log(startingHand);
  }

  main() {
    let running = true;
    while (running) {
      this.mulliganPhase();
      running = false;
    }

    console.log("GAME OVER");
  }
}
