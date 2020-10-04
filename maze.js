/* 
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.



 0 = Safe place to walk
1 = Wall
2 = Start Point
3 = Finish Point

  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

*/

const { cursorTo } = require('readline');

let maze = [
	[ 1, 1, 1, 1, 1, 1, 1 ],
	[ 1, 0, 0, 0, 0, 0, 3 ],
	[ 1, 0, 1, 0, 1, 0, 1 ],
	[ 0, 0, 1, 0, 0, 0, 1 ],
	[ 1, 0, 1, 0, 1, 0, 1 ],
	[ 1, 0, 0, 0, 0, 0, 1 ],
	[ 1, 2, 1, 0, 1, 0, 1 ]
];

function mazeRunner(maze, directions) {
	// Code here

	let start, curCell;

	for (let row = 0; row < maze.length; row++) {
		for (let column = 0; column < maze[row].length; column++) {
			curCell = maze[row][column];
			if (curCell === 2) {
				start = [ row, column ];
			}
		}
	}

	const move = (start, directions, maze) => {
		let finalStage, cell;
		let curPosition = start;
		for (let i = 0; i < directions.length; i++) {
			let coord = directions[i];
			if (coord === 'N') {
				curPosition[0]--;
			} else if (coord === 'S') {
				curPosition[0]++;
			} else if (coord === 'E') {
				curPosition[1]++;
			} else if (coord === 'W') {
				curPosition[1]--;
			}

			if (curPosition[0] < maze.length && curPosition[1] < maze.length) {
				cell = maze[curPosition[0]][curPosition[1]];
			} else {
				finalStage = 'Dead';
				break;
			}

			if (cell == 1 || cell == undefined) {
				finalStage = 'Dead';
				break;
			} else if (cell == 3) {
				finalStage = 'Finish';
				break;
			} else if (i >= directions.length - 1 && cell == 0) {
				finalStage = 'Lost';
				break;
			}
		}
		return finalStage;
	};
	return move(start, directions, maze);
}

console.log(mazeRunner(maze, [ 'N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E' ]));
console.log(mazeRunner(maze, [ 'N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E' ]));
console.log(mazeRunner(maze, [ 'N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W' ]));

console.log(mazeRunner(maze, [ 'N', 'N', 'N', 'W', 'W' ]));
console.log(mazeRunner(maze, [ 'N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S' ]));

console.log(mazeRunner(maze, [ 'N', 'E', 'E', 'E', 'E' ]));
