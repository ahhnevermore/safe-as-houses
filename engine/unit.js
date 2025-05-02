class Unit {
  constructor(xy,card) {
    this.show = false;
    this.cards = [card];
    this.position = xy;
    this.power = 0
  }
}
module.exports = Unit;