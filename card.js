const Suits = Object.freeze({
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
    BLACK: 'black',
  });
  
  const Ranks = Object.freeze({
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
    EIGHT: '8',
    NINE: '9',
    TEN: '10',
    JACK: 'J',
    QUEEN: 'Q',
    KING: 'K',
    ACE: 'A',
  });
  
  class Card {
    constructor(suit, rank) {
      if (!Object.values(Suits).includes(suit)) {
        throw new Error(`Invalid suit: ${suit}`);
      }
      if (!Object.values(Rank).includes(rank)) {
        throw new Error(`Invalid value: ${rank}`);
      }
  
      this.suit = suit;
      this.rank = rank;
    }
  
    toString() {
      return `${this.rank} of ${this.suit}`;
    }
  }
  
  module.exports = { Card, Suits, Ranks };