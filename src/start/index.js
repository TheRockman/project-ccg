import angular from "angular";
import uirouter from "angular-ui-router";

import routes from "./start.routes.js";

export default angular.module("start", [uirouter]).config(routes);
