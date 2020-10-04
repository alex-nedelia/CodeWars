/* 
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

[[1, 2,  3,  4,  5,],
 [20, 21, 22, 23, 24,], 
 [19, 32, 33, 34, 25,], 
 [18, 31, 36, 35, 26,], 
 [17, 30, 29, 28, 27,]]

 [[1, 2,  3,  4,  5,  6],
 [20, 21, 22, 23, 24, 7], 
 [19, 32, 33, 34, 25, 8], 
 [18, 31, 36, 35, 26, 9], 
 [17, 30, 29, 28, 27, 10], 
 [16, 15, 14, 13, 12, 11]]



*/

const snail = function(array) {
	if (array[0].length <= 0) {
		return [];
	}

	const snailList = [];
	let adder;

	let row = 0;
	let column = -1;
	let forward = true;

	const arrLen = array.length;

	let n = array.length;
	const turns = n * 2 - 1;

	for (let turn = 0; turn < turns; turn++) {
		if (turn > 1 && turn % 2 == 0) {
			forward = !forward;
		}
		adder = forward ? 1 : -1;

		for (let line = 0; line < n; line++) {
			if (turn % 2 == 0) {
				column += adder;
				if (column > arrLen - 1) {
					column = arrLen - 1;
				}
			} else {
				row += adder;
				if (row > arrLen - 1) {
					row = arrLen - 1;
				}
			}
			snailList.push(array[row][column]);
		}
		if (turn % 2 == 0) {
			n--;
		}
	}
	return snailList;
};

const n3x3 = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
// const n3x3 = [
// 	[ 1, 2, 3 ],
// 	[ 4, 5, 6 ],
// 	[ 7, 8, 9 ]
// ];

const n4x4 = [ [ 1, 2, 3, 2 ], [ 4, 5, 6, 0 ], [ 7, 8, 9, 10 ], [ 1, 2, 3, 2 ] ];
// n4x4 = [
// [ 1, 2, 3, 2 ],
// [ 4, 5, 6, 0 ],
// [ 7, 8, 9, 10 ],
// [ 1, 2, 3, 2 ]
// ];

// console.log(snail(n3x3));
// console.log(snail(n4x4));
console.log(
	snail(
		[
			// [ 1, 2, 3, 4, 5, 6 ],
			// [ 20, 21, 22, 23, 24, 7 ],
			// [ 19, 32, 33, 34, 25, 8 ],
			// [ 18, 31, 36, 35, 26, 9 ],
			// [ 17, 30, 29, 28, 27, 10 ],
			// [ 16, 15, 14, 13, 12, 11 ]
		]
	)
);
