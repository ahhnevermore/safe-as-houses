class Game {
    constructor() {
    this.SIDE = 9;
      this.currentPlayer = 'X';
      this.winner = null;
    }
  
    makeMove(index) {
      if (this.board[index] || this.winner) return false;
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
      return true;
    }
  
    checkWinner() {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
      ];
      return lines.some(([a, b, c]) => {
        return this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c];
      });
    }
  
    getState() {
      return {
        board: this.board,
        currentPlayer: this.currentPlayer,
        winner: this.winner,
      };
    }
  }
  
  module.exports = Game;