import eventHandler from "./eventHandler";
import { getRandomNumberBetween, findAndReplace } from "../utils/utils.service";
import {
  GAME_START,
  MULLIGAN_PENDING,
  MULLIGAN_REPLACE,
  MULLIGAN_COMPLETED,
  QUIT_GAME
} from "./events";

export default class Game {
  constructor(eventDispatcher, player) {
    this.player = player;
    this.playerDeck = this.player.deck.cards;
    this.player.startingHand = [];
    this.player.hand = [];
    this.eventDispatcher = eventDispatcher;
    console.log("Player object", this.player);
  }

  mulliganReplace(card) {
    findAndReplace(
      this.player.startingHand,
      card,
      this.playerDeck[getRandomNumberBetween(0, this.playerDeck.length - 1)]
    );
  }

  mulliganPhase() {
    let startingHand = [];
    let card;
    while (startingHand.length < 4) {
      card = this.playerDeck[
        getRandomNumberBetween(0, this.playerDeck.length - 1)
      ];
      startingHand.push(card);
    }
    this.eventDispatcher.trigger(MULLIGAN_PENDING, startingHand);
    console.log("STARTING HAND", startingHand);
  }

  main() {
    const event = this.eventDispatcher;

    event.on(GAME_START, () => this.mulliganPhase());
    event.on(
      MULLIGAN_PENDING,
      event => (this.player.startingHand = event.detail)
    );
    event.on(MULLIGAN_REPLACE, event => this.mulliganReplace(event.detail));
    event.on(MULLIGAN_COMPLETED, event => {
      this.player.hand = Object.assign([], this.player.startingHand);
    });
    event.on(QUIT_GAME, event => alert("GAME OVER"));
  }
}
