class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = "x";
    this.field = [
      [, ,],
      [, ,],
      [, ,],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex]) return;
    this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
    this.currentPlayerSymbol = this.currentPlayerSymbol == "x" ? "o" : "x";
  }

  isFinished() {
    return this.getWinner() || this.noMoreTurns() ? true : false;
  }

  getWinner() {
    let cross = "";
    let reverseCross = "";
    for (let i = 0; i < 3; i++) {
      if (this.field[i].join("") == "xxx" || this.field[i].join("") == "ooo") {
        return this.field[i][0];
      }
      let col = "";
      for (let j = 0; j < 3; j++) {
        col += this.field[j][i];
        if (i == j) {
          cross += this.field[i][j];
        }
        if (2 - i == j) {
          reverseCross += this.field[i][j];
        }
      }
      if (col == "xxx" || col == "ooo") {
        return col[0];
      }
      if (cross == "xxx" || cross == "ooo") {
        return cross[0];
      }
      if (reverseCross == "xxx" || reverseCross == "ooo") {
        return reverseCross[0];
      }
    }
    return null;
  }

  noMoreTurns() {
    return this.field.join("").split(",").join("").length == 9;
  }

  isDraw() {
    if (this.getWinner() || !this.isFinished()) return false;
    else return true;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex]
    ? this.field[rowIndex][colIndex]
    : null;
  }
}

module.exports = TicTacToe;
