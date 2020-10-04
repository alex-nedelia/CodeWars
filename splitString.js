/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

/*
function solution(str) {
	const newList = [];
	let pair;
	for (let i = 0; i < str.length; i = i + 2) {
		if (str[i + 1]) {
			pair = str[i] + str[i + 1];
		} else {
			pair = str[i] + '_';
		}
		newList.push(pair);
	}

	return newList;
}
*/

function solution(str) {
	return (str.length % 2 ? str + '_' : str).match(/../g);
}

console.log(solution('abcdef'));
console.log(solution('abcdef3'));
