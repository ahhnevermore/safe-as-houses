class vec2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    equals(other) {
      return this.x === other.x && this.y === other.y;
    }
  
    toString() {
      return `${this.x},${this.y}`;
    }
  
    static fromString(str) {
      const [x, y] = str.split(',').map(Number);
      return new Vector2(x, y);
    }
  }
  
  module.exports = vec2;