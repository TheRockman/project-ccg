routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
  $stateProvider.state("deck-create", {
    url: "/deck",
    template: require("./deck.html")
  });
}
