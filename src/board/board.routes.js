routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
  $stateProvider.state("board", {
    url: "/board",
    controller: "BoardController as vm",
    template: require("./board.html")
  });
}
