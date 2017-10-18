import angular from "angular";
import uirouter from "angular-ui-router";

import routes from "./board.routes.js";
import BoardController from "./board.controller";
import card from "../card/card.component";
import "./board.css";

export default angular
  .module("board", [uirouter])
  .config(routes)
  .controller("BoardController", BoardController);
