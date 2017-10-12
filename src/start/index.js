import angular from "angular";
import uirouter from "angular-ui-router";

import routes from "./start.routes.js";
import StartController from "./start.controller.js";

export default angular
  .module("start", [uirouter])
  .config(routes)
  .controller("StartController", StartController);
