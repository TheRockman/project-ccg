import angular from "angular";
import uirouter from "angular-ui-router";

import routes from "./deck.routes.js";

export default angular.module("deck", [uirouter]).config(routes);
