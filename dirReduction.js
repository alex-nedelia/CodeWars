/*Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
*/

/*  

IF CUR IS SOUTH and PREV = SOUTH 

*/

function dirReduc(arr) {
	const opose1 = [ 'NORTH', 'WEST' ];
	const opose2 = [ 'SOUTH', 'EAST' ];

	const someArr = [ ...arr ];

	const newArr = arr.reduce((acc, cur, index) => {
		if (opose1.indexOf(acc) === opose2.indexOf(cur)) {
			delete someArr[index];
			// delete someArr[];
		}
	});

	return someArr;
}

console.log(dirReduc([ 'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST' ]));
console.log(dirReduc([ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]));
console.log(dirReduc([ 'NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST' ]));
