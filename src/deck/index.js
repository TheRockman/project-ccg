import angular from "angular";
import uirouter from "angular-ui-router";

import routes from "./deck.routes.js";
import DeckController from "./deck.controller";

export default angular
  .module("deck", [uirouter])
  .config(routes)
  .controller("DeckController", DeckController);
