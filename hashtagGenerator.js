/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
function generateHashtag(str) {
	const goodString = /(\w)/g;

	if (!str.match(goodString)) return false;

	let newHash = str
		.split(' ')
		.reduce(
			(acc, word) => {
				let newWord = word.charAt(0).toUpperCase() + word.slice(1);
				acc.push(newWord);
				return acc;
			},
			[ '#' ]
		)
		.join('');

	return newHash.length < 141 ? newHash : false;
}

console.log(generateHashtag('Codewars is nice'));
console.log(generateHashtag('Codewars'));
console.log(generateHashtag(''));
console.log(generateHashtag('a'.repeat(139)));
console.log(generateHashtag(' '.repeat(139)));
generateHashtag('a'.repeat(140));
console.log(
	generateHashtag(
		'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
	)
);
