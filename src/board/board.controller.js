import { Game, EventDispatcher } from "../game";
import { countInArray } from "../utils/utils.service.js";
import {
  GAME_START,
  MULLIGAN_COMPLETED,
  MULLIGAN_REPLACE,
  QUIT_GAME
} from "../game/events";

export default class BoardController {
  constructor() {
    this.state = {
      mulligan: false,
      running: false,
      cardsToReplace: []
    };
    this.player = JSON.parse(localStorage.getItem("player"));
    this.eventDispatcher = new EventDispatcher();
    const game = new Game(this.eventDispatcher, this.player);

    game.main();
    this.eventDispatcher.trigger(GAME_START);

    this.render();
  }

  replaceCardMulligan(card, index) {
    if (countInArray(this.state.cardsToReplace, index) === 1) {
      alert("Already discarded!");
      return;
    }
    this.state.cardsToReplace.push(index);
    this.eventDispatcher.trigger(MULLIGAN_REPLACE, card);
  }

  confirmMulligan() {
    this.state.mulligan = false;
    this.eventDispatcher.trigger(MULLIGAN_COMPLETED);
    this.state.running = true;
    console.log(this.player);
  }

  quitGame() {
    this.eventDispatcher.trigger(QUIT_GAME);
  }

  render() {
    this.state.mulligan = true;
  }
}
