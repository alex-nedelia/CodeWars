function findOdd(A) {
	// An object to store the items
	const numbers = {};
	//   Loop through the array
	A.forEach((numb) => {
		if (!numbers[numb]) {
			numbers[numb] = true;
		} else {
			numbers[numb] = false;
		}
	});

	for (const [ key, value ] of Object.entries(numbers)) {
		if (value == true) return key;
	}
}

console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));
