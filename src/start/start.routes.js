routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
  $stateProvider.state("start", {
    url: "/",
    controller: "StartController as vm",
    template: require("./start.html")
  });
}
