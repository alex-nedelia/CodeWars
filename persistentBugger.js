/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit
*/

function persistence(num) {
	let count = 0;
	while (num > 9) {
		const numSeq = num.toString().split('');
		num = numSeq.reduce((acc, cur) => {
			acc *= cur;
			return acc;
		}, 1);
		count += 1;
	}
	return count;
}

// console.log(productList(count, 999));
console.log(persistence(999));
console.log(persistence(39));
