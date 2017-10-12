import angular from "angular";
import uirouter from "angular-ui-router";
import routes from "./routes";

const DerpStone = angular.module("DerpStone", [uirouter]).config(routes);
