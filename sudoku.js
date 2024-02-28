// Write a program that will solve simple sudoku

function solveSudoku(board) {
	const emptyCell = findEmptyCell(board);
 
	// If there are no empty cells, the puzzle is solved
	if (!emptyCell) {
	  return true;
	}
 
	const [row, col] = emptyCell;
 
	// Try filling in the empty cell with numbers from 1 to 9
	for (let num = 1; num <= 9; num++) {
	  if (isValidMove(board, row, col, num)) {
		 // Make the move
		 board[row][col] = num;
 
		 // Recursively try to solve the rest of the puzzle
		 if (solveSudoku(board)) {
			return true; // If the puzzle is solved, stop the recursion
		 }
 
		 // If the current move doesn't lead to a solution, backtrack
		 board[row][col] = 0;
	  }
	}
 
	// No valid move was found, backtrack to the previous state
	return false;
 }
 
 // Function to find the first empty cell in the Sudoku board
 function findEmptyCell(board) {
	for (let row = 0; row < 9; row++) {
	  for (let col = 0; col < 9; col++) {
		 if (board[row][col] === 0) {
			return [row, col];
		 }
	  }
	}
	return null; // If no empty cell is found, the puzzle is solved
 }
 
 // Function to check if placing a number at a specific position is valid
 function isValidMove(board, row, col, num) {
	// Check if the number is not in the same row or column
	for (let i = 0; i < 9; i++) {
	  if (board[row][i] === num || board[i][col] === num) {
		 return false;
	  }
	}
 
	// Check if the number is not in the same 3x3 grid
	const startRow = Math.floor(row / 3) * 3;
	const startCol = Math.floor(col / 3) * 3;
 
	for (let i = 0; i < 3; i++) {
	  for (let j = 0; j < 3; j++) {
		 if (board[startRow + i][startCol + j] === num) {
			return false;
		 }
	  }
	}
 
	return true;
 }
 
 // Example Sudoku puzzle (0 represents empty cells)
 const sudokuBoard = [
	[7, 0, 4, 8, 0, 0, 3, 0, 1],
	[8, 2, 0, 5, 0, 0, 0, 4, 0],
	[0, 0, 9, 4, 3, 0, 5, 0, 0],
	[3, 1, 0, 0, 0, 0, 8, 0, 7],
	[0, 8, 0, 0, 0, 0, 0, 1, 0],
	[9, 0, 7, 0, 0, 0, 0, 3, 2],
	[0, 0, 6, 0, 1, 5, 4, 0, 0],
	[0, 7, 0, 0, 0, 9, 0, 6, 5],
	[5, 0, 8, 0, 0, 2, 1, 0, 3]
 ]; 
 const sudokuBoard2 = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9]
 ];
	 const sudokuBoard3 = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9]
 ];
 const unsolvableSudoku = [
	[5, 3, 0, 0, 7, 7, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 0],
	[0, 0, 0, 0, 8, 0, 0, 7, 9]
 ];
 
 function isSudokuSolving(sudokuPuzzle) {
	if (solveSudoku(sudokuPuzzle)) {
	console.log('\nSudoku Solution:');
	  for (let row = 0; row < 9; row++) {
	  console.log(sudokuPuzzle[row].join(' '));
	}
 } else {
	console.log('No solution found for the Sudoku puzzle.');
	}
 }
 
//  isSudokuSolving(sudokuBoard); 
//  isSudokuSolving(sudokuBoard2);
//  isSudokuSolving(sudokuBoard3);
 isSudokuSolving(unsolvableSudoku);
