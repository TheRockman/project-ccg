export default class StartController {
  constructor($state) {
    this.state = $state;
  }

  goTo() {
    this.state.go("deck-create");
  }
}
