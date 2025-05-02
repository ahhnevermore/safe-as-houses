const vec2 = require("./vec2");

class Player {
  constructor(xy) {
    this.hand = [];
    this.units = [];
    this.position = xy;
  }
}

module.exports = Player;
