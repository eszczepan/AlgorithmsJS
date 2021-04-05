function isValid(numbers) {
  const seen = {};
  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];
    if (value <= 0 || value > 9) return false;
    if (seen[value]) return false;
    seen[value] = true;
  }
  return true;
}

const doneOrNot = (board) => {
  // Check rows
  if (board.every(isValid)) {
    // Check columns
    for (let col = 0; col < 9; col++) {
      const column = [];
      for (row = 0; row < 9; row++) {
        column.push(board[row][col]);
      }
      if (!isValid(column)) return "Try again!";
    }

    // Check regions
    for (let col = 0; col < 9; col += 3) {
      let region = [];
      for (let row = 0; row < 9; row += 3) {
        region = [
          ...board[row].slice(col, col + 3),
          ...board[row + 1].slice(col, col + 3),
          ...board[row + 2].slice(col, col + 3),
        ];
      }
      if (!isValid(region)) return "Try again!";
    }

    return "Finished!";
  } else return "Try again!";
};

console.log(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ]),
  "Finished!"
);

console.log(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ]),
  "Try again!"
);
