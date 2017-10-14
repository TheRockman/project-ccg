routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
  $stateProvider.state("deck-create", {
    url: "/deck",
    controller: "DeckController as vm",
    template: require("./deck.html")
  });
}
