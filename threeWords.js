/*
Let's teach the Robots to distinguish words and numbers.

You are given a string with words and numbers separated by whitespaces (one space). The words contains only letters. You should check if the string contains three words in succession. For example, the string "start 5 one two three 7 end" contains three words in succession.

Input: A string with words.

Output: The answer as a boolean.

Precondition: The input contains words and/or numbers. There are no mixed words (letters and digits combined).
0 < len(words) < 100
*/
function threeWords(text) {
	var arrText = text.toLowerCase().split(' ');
	var pattern = /(\D)/g;
	var prev, cur, next;
	var flag = false;

	for (let i = 0; i < text.length; i++) {
		prev = arrText[i - 1] ? arrText[i - 1] : undefined;
		cur = arrText[i];
		next = arrText[i + 1] ? arrText[i + 1] : undefined;

		if (prev && next && (prev.match(pattern) && cur.match(pattern) && next.match(pattern))) {
			flag = true;
		}
	}

	console.log(flag);
}
threeWords('start 5 one two three 7 end');
threeWords('He is 123 man');
threeWords('1 2 3 4');
threeWords('bla bla bla bla');
threeWords('Hi');
