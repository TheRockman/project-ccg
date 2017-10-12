//External
import angular from "angular";
import uirouter from "angular-ui-router";

//Internal
import routes from "./routes";

//Internal modules
import start from "./start";

angular.module("DerpStone", [uirouter, "start"]).config(routes);
