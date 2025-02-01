export function seatsInTheater(nCols: number, nRows: number, col: number, row: number) {
  return (nCols - col + 1) * (nRows - row);
} // seatsInTheater()

console.log(seatsInTheater(16, 11, 5, 3));
