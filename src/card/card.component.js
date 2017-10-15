function CardComponentController() {}
module.exports = {
  template: require("./card.html"),
  controller: CardComponentController,
  bindings: {
    info: "="
  }
};
