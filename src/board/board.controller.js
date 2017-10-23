import { Game, EventDispatcher } from "../game";
import { GAME_START } from "../game/events";

export default class BoardController {
  constructor($scope) {
    this.renderingState = {
      mulligan: false
    };
    this.scope = $scope;
    this.player = JSON.parse(localStorage.getItem("player"));
    this.eventDispatcher = new EventDispatcher();
    this.game = new Game(this.eventDispatcher, this.player);
    //Trigger this when dom is rendered
    this.eventDispatcher.trigger(GAME_START);
    this.render();
  }

  render() {
    this.renderingState.mulligan = true;
  }
}
