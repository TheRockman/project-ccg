//External
import angular from "angular";
import uirouter from "angular-ui-router";

//Internal
import routes from "./routes";
import "./main.css";

//Internal modules
import start from "./start";
import deck from "./deck";
import board from "./board";

angular
  .module("DerpStone", [uirouter, "start", "deck", "board"])
  .config(routes);
